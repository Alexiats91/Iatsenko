const Article = ({articles}) => {
	const elem = articles.map((el,key) => {
		return (
		<article key={key}>
			<h2> { el.articleName }</h2>
			<p> { el.articleText } </p>
		</article>
		)
	});
	return <>{elem}</>;
}
export default Article;