
function SkillsCard(props){
    return (
    <div className="skills-card">
        <h3>{props.title}</h3>
        <p>{props.skills}</p>
    </div>);
}

export default SkillsCard