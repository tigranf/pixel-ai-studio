interface Props {
  params: {
    id: string;
  };
}
export default function UpdateTransformationsPage({ params }: Props) {
  const { id } = params;
  return <p>UpdateTransformationsPage: id = {id} </p>;
}
