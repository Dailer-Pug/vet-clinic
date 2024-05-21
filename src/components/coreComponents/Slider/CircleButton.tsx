import { ImgCicrle, ImgCircleTarget } from "./ImgCircle.styled";

type CircleButPorps = {
	selected: boolean;
	onClick: any;
}

export const CircleButton = ({ selected, onClick }: CircleButPorps) => {

	return (
		<>
			{selected ? <ImgCircleTarget onClick={onClick}></ImgCircleTarget>
				: <ImgCicrle onClick={onClick}></ImgCicrle>}
		</>
	)
}
