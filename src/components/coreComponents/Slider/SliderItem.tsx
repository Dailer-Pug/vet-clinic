import { Img } from "./SliderItem.styled";

type SliderItemType = {
	src: string;
}

export const SliderItem = ({ src, }: SliderItemType) => {
	return (

		<Img src={src} />
	)
}
