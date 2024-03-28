'use client'

interface Props {
	params: {
		id: string;
	};
}

export default function AddTransformationTypePage({ params }: Props) {
	const { id } = params;

	return (
		<>
			<h1>AddTransformationTypePage { id }</h1>
			<p>AddTransformationTypePage content</p>
		</>
	);
}
