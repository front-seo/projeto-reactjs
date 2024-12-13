import { useNavigate } from 'react-router-dom'; // Substituir useHistory por useNavigate
import styles from './newProject.module.css';
import ProjectForm from '../projects/ProjectForm';

export default function NewProject() {
    const navigate = useNavigate(); // Usar useNavigate

    function createPost(project) { // Recebe `project` como parâmetro
        // Inicializa `cost` e `services`
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            // Redireciona após o sucesso
            navigate('/projects', { state: { message: "Projeto criado com sucesso" } }); // Uso correto do navigate com `state`
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm
                btnText="Criar projeto"
                handleSubmit={createPost} // Passa a função `createPost` como `handleSubmit`
            />
        </div>      
    );
}
