import { Input } from "../InputCore/Input"


export const Map = () => {


	return (
		<div className="map_form">
			<div className="map_info">
				<Input type="text" ghost placeholder="Адрес доставки" />
				<Input type="mail" ghost placeholder="example@mail.ru" />
				<div>
					<img alt="map_flag" />
					<span>Найти на карте</span>

				</div>
			</div>
			<div className="map_point">
				<img alt="map_point" />
				<span  >Определить местоположение</span>

			</div>
		</div>
	)
}
