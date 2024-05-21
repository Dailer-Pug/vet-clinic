import { useState, JSX } from "react"
import { Wrapper } from "./Slider.styled"
import { SlideButton } from "./ImgButton.styled"
import { CircleButton } from "./CircleButton"

type SliderProp = {
	children: JSX.Element[] | JSX.Element,
}


export const Slider = ({ children }: SliderProp) => {

	const [curIndex, setCurIndex]: any = useState(0)

	children = Array.isArray(children) ? children : [children]

	const leftScroll = function() {

		// 		curIndex === 0 ? setCurIndex(0) : setCurIndex(curIndex - 1)
		setCurIndex(Math.max(0, curIndex - 1))
		console.log(curIndex)
	}

	const rightScroll = function() {
		// 	curIndex === children.length - 1 ? setCurIndex(curIndex) : setCurIndex(curIndex + 1)
		// 	setCurIndex((curIndex: number) => children.length - 1 ? curIndex : curIndex + 1)
		setCurIndex(Math.min(children.length - 1, curIndex + 1))
		console.log(children.length)
		console.log(curIndex)
	}

	return (
		<Wrapper>
			<SlideButton position="left" onClick={leftScroll}>&#8592;</SlideButton>

			<div >
				{children[curIndex]}
				<div className="ImgSlider">
					{children.map((_, index) => (
						<CircleButton onClick={() => setCurIndex(index)} selected={(curIndex === index ? true : false)}
							key={index}></CircleButton>
					))}
				</div>
			</div>
			<SlideButton position="right" onClick={rightScroll}>&#8594;</SlideButton>
		</Wrapper >
	)

}
