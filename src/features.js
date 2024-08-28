import './App.css';

 function Features() {
    const CN="Features";
    const CN1="featuresimage";
    const image=[
        {name:"./medal3.png",title:'Headline6'},
        {name:"./medal1.png",title:'Headline6'},
        {name:"./medal2.png",title:'Headline6'},
        {name:"./medal.png",title:'Headline6'},
    ];
    const alt = "logo";
    return (
        <div className={CN}>
            <h1 className="highlight">Highlight Features</h1>
            <div className={CN1}>
    {image.map((i,index) => 
    {
       return <FeaturesContent key={index}  name={image[index].name} title={image[index].title} alt={alt}/>
})}
            </div>
        </div>
    )
}
function FeaturesContent({CN1,name,alt,CN,title}) {
    return (
        <div className={CN}>
            <div className={CN1}>
            <img src={name} alt={alt}></img>
            <p className="title">{title}</p>
            </div>
        </div>
    )
}
export default Features;