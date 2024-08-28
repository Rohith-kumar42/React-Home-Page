import './App.css';

function Nav() {
const CN="Nav";
const CN1="navMenu";
const obj=[
    {name:"Home"},
    {name:"Features"},
    {name:"Why Us"},
    {name:"About Us"},
];
const img="images.png";
const alt = "logo";
const button="login";
return(
    <div className={CN}> 
   
   <img className="logo" src={img} alt={alt}></img>
   <ul className={CN1}>
    {obj.map((i,index) => 
    {
       return <NavContent key={index}  name={obj[index].name} />
})}</ul>
    <button className={button}>Login</button>
    </div>
);
}
function NavContent({CN,name}){
    return(
        <div className={CN}>
            <li>{name}</li>
            </div>
    );
}
export default Nav;
