import './App.css';

 function Features() {
    const CN="Features";
    const CN1="featuresimage";
    const image=[
        {name:"./medal3.png",title:'Headline6',iname:"i1"},
        {name:"./medal1.png",title:'Headline6',iname:"i2"},
        {name:"./medal2.png",title:'Headline6',iname:"i3"},
        {name:"./medal.png",title:'Headline6',iname:"i4"},
    ];
    const alt = "logo";
    return (
        <div className={CN}>
            <h1 className="highlight">Highlight Features</h1>
            <div className={CN1}>
    {image.map((i,index) => 
    {
       return <FeaturesContent key={index}  name={image[index].name} title={image[index].title} iname={image[index].iname} alt={alt}/>
})}
            </div>
        </div>
    )
}
function FeaturesContent({CN1,name,alt,CN,title,iname}) {
    return (
        <div className={CN}>
            <div className={CN1}>
            <img src={name} className={iname} alt={alt}></img>
            <p className="title">{title}</p>
            </div>
        </div>
    )
}
export default Features;