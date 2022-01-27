import Image from 'next/image';

const Slide = ({
    id,
    image,
    title,
}) => {
    return(
        <div>
            <Image
                alt={title}
                layout='fill'
                src={image}
                key={id}
            />
        </div>
    );
};

export default Slide;
