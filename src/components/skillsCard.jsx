
function SkillsCard(props){
    return (
    <div className="skills-card">
        <h2>{props.title}</h2>
        <p>{props.skills}</p>
    </div>);
}

export default SkillsCard