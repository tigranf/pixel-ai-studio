interface Props {
  params: {
    id: string;
  };
}
const TransformationsPage = ({ params }: Props) => {
  const {id} = params;
  return (
	<div>TransformationsPage id#{id}</div>
  )
}

export default TransformationsPage