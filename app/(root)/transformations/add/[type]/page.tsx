'use client'

interface Props {
	params: {
		type: string;
	};
}

export default function AddTransformationTypePage({ params }: Props) {
	const { type } = params;

	return (
		<>
			<h1>AddTransformationTypePage: type = { type }</h1>
		</>
	);
}
