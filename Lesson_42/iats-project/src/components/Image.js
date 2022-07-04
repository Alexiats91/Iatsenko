const Image = ({content}) => {
	return (
		<img src={content.image} alt={content.alt}/>
	);
}
export default Image;