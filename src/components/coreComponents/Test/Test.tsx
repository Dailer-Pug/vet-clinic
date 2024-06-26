import { Button } from "../ButtonCore/Button"
import { Collapse } from "../CollapseCore/Collapse"
import { Input } from "../InputCore/Input"
import { TabItem } from "../RadioInput/TabItem"
import { TabGroup } from "../RadioInput/Tabs"


export const Test = () => {

	return (
		<>

			<Button size={55} color="green" outline>Hello</Button>
			<Button size={55} color="blue" primary>Hello</Button>
			<Button size={55} color="pink" ghost>Hello</Button>
			<Input placeholder='Hello...' type="text" size={10} primary />
			<Collapse tittle='Hello Denis'>
				<p>In this world, is the destiny of mankind controlled
					by some transcendental entity or law...? Is it like the hand of God hovering above?</p>
				<p> At least it is true that man has no control, even over his own will.</p>
			</Collapse>

			<TabGroup>
				<TabItem title="Все">
					Товары под тэгом Все
				</TabItem>
				<TabItem title="Кошки">
					Товары под тэгом Кошки
				</TabItem>
				<TabItem title="Собаки">
					Товары под тэгом Собаки
				</TabItem>
				<TabItem title="Грызуны">
					Товары под тэгом Грызуны
				</TabItem>
				<TabItem title="Птицы">
					Товары под тэгом Птицы
				</TabItem>
				<TabItem title="Рептилии">
					Товары под тэгом Рептилии
				</TabItem>
				<TabItem title="Рыбы">
					Товары под тэгом Рыбы
				</TabItem>
			</TabGroup>		</>
	)
}
