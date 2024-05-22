import { useState, JSX } from "react"
import { ImgCicrle, SlideButton, Wrapper } from "./Slider.styled"

type SliderProp = {
	children: JSX.Element[] | JSX.Element,
}


export const Slider = ({ children }: SliderProp) => {

	const [curIndex, setCurIndex]: any = useState(0)

	children = Array.isArray(children) ? children : [children]

	return (
		<Wrapper>
			<SlideButton
				position="left"
				onClick={() => setCurIndex(Math.max(0, curIndex - 1))}>
				&#8592;
			</SlideButton>

			<div >
				{children[curIndex]}
				<div className="ImgSlider">
					{children.map((_, index) => (
						<ImgCicrle key={index} onClick={() => setCurIndex(index)}
							target={(curIndex === index ? true : false)} />
					))}
				</div>
			</div>
			<SlideButton
				position="right"
				onClick={() => setCurIndex(Math.min(children.length - 1, curIndex + 1))}>
				&#8594;
			</SlideButton>
		</Wrapper >
	)

}
