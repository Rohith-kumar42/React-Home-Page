import './App.css';

function Mission() {
    const stats=[
        {head:"10 Million +",tail:"Messagessent"},
        {head:"1 M+",tail:"Activecontacts"}
    ]
    const stats1=[
        {head:"100 +",tail:'Campaigns per day'},
        {head:"10 X",tail:'Speed'} 
    ]
    const cn2=[
        {cname1:"pcontent1"},
        {cname1:"pcontent2"}
    ]
   
    return (
        <div className="Mission">
            <h2>Why Spotknack</h2>
            <h2>Our mission is user</h2>
            <p className='missionp'>Convenience Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequit.</p>
            <div className="stats">
                {stats.map((i,index) => 
                {
                    return <MissionContent key={index} head={stats[index].head} tail={stats[index].tail}/>
                })}
            </div>
            <div className="stats1">
                {stats1.map((i,index) => 
                {
                    return <MissionContent key={index} head1={stats1[index].head} tail1={stats1[index].tail} cname1={cn2[index].cname1} />
                })}
            </div>
        </div>
    );
}
function MissionContent({head,tail,head1,tail1,cname1}){
    return (
        <div>
        <div className="stats">
            <div className="statsContent">
            <h3>{head}</h3>
            <p style={{marginLeft:"30px"}}>{tail}</p>
            </div>
            
        </div>
        <div className="stats1">
            <div className="statsContent1">
            <h3 className='header1'>{head1}</h3>
            <p  className={cname1}>{tail1}</p>
            </div>
            
            </div>
        </div>
    )
}
export default Mission;