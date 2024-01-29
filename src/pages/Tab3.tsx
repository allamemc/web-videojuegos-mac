import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCardTitle,
	IonCardContent,
	IonImg,
	IonText,
	IonItem,
	IonCardSubtitle,
	IonCardHeader,
	IonCard,
	IonList,
	IonLabel,
} from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import './Tab3.css'

const Tab3: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle className='custom-title'>Reseña de Videojuegos</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonCard className='custom-card'>
					<IonCardHeader className='custom-card-header'>
						<IonCardTitle>Animal Crossing</IonCardTitle>
					</IonCardHeader>
					<IonImg
						className='game-image'
						src='http://www.technologyreview.es/sites/default/files/articles/images/animal_crossing.jpg'
						alt='Imagen del videojuego'
					/>
					<IonCardContent>
						<IonList>
							<IonItem className='custom-section-item'>
								<IonLabel className='title-c'>
									Animal Crossing - El juego más vendido de la pandemia
								</IonLabel>
								<IonText>
									Cuando el coronavirus obligó a la gente a encerrarse en casa,
									muchas personas recuperaron la sensación de normalidad en
									algunos videojuegos amables y colaborativos gracias a su
									capacidad de generar relaciones parasociales y de resolver la
									desesperada necesidad de tener control sobre algo.
								</IonText>
							</IonItem>
							<IonItem className='custom-section-item'>
								<IonLabel className='title-c'>Nuevas actualizaciones</IonLabel>
								<IonText>
									El título anima a los jugadores a construir una isla desierta
									liderada por un mapache barrigón que es un magnate
									inmobiliario y sus sobrinos, y a charlar con una serie de
									graciosos animales antropomórficos. Para Imam, este videojuego
									fue una forma de escapar y un espacio seguro para conectar con
									amigos. Y recuerda: "Conocí a un par de amigos y visité sus
									islas, y fue agradable, casi como verlos. No hablábamos de lo
									que pasaba en nuestras vidas, y eso resultaba refrescante
									porque no debíamos entrar en pánico".
								</IonText>
							</IonItem>
							<IonItem className='custom-section-item'>
								<IonLabel className='title-c'>
									Nuevas actualizaciones y Mejoras
								</IonLabel>
								<IonText>
									Los desarrolladores de Los Sims 4 continúan trabajando en
									futuras actualizaciones y mejoras para el juego. Estas
									actualizaciones pueden incluir correcciones de errores, nuevas
									funciones y mejoras en la jugabilidad, manteniendo fresca la
									experiencia de juego y brindando a los jugadores motivos para
									seguir explorando el mundo virtual de Los Sims.
								</IonText>
							</IonItem>
						</IonList>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	)
}

export default Tab3
