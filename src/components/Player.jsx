
export const Player = ({song})=>{
    console.log('Song object rec', song);
return (
<div>
<button className= 'btn btn-success'>Back to Songs</button>
<p>
{song?.artistName} {song?.trackName}
</p>
<br/>
<br/>
<audio controls>
    <source scr={song?.previewUrl} type="audio/mp4"/>
    Your browser does not support the audio element
</audio>
</div>)
}