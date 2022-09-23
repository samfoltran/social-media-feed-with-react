import {useState} from 'react';

function LikePostButton(props){

    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        if(liked){
            props.subLike();
        } else {
            props.addLike();
        }

        setLiked(!liked);
    }

    const label = (liked === false) ? 'Like' : 'Unlike';
    return(
        <button onClick={handleClick}>
            {label}
        </button>
    );

} export default LikePostButton;