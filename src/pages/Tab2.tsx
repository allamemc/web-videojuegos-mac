import React from 'react'
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCard,
	IonImg,
	IonCardHeader,
	IonCardTitle,
	IonCardContent,
	IonList,
	IonItem,
	IonLabel,
	IonText,
} from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import './Tab2.css'

const Tab2: React.FC = () => {
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
						<IonCardTitle>Los Sims 4</IonCardTitle>
					</IonCardHeader>
					<IonImg
						className='game-image'
						src='https://cdn1.epicgames.com/offer/2a14cf8a83b149919a2399504e5686a6/EGS_SP31TheSims4DecortotheMaxKit_Maxis_DLC_G1A_00_1920x1080-03a445bd43cfe357e5ba5d7a48791457'
						alt='Imagen del videojuego'
					/>
					<IonCardContent>
						<IonList>
							<IonItem className='custom-section-item'>
								<IonLabel className='tituloscards'>
									Los Sims 4 - Juego Base
								</IonLabel>
								<IonText>
									Los Sims 4 es la cuarta entrega de la famosa serie de
									simulación de vida. En este juego, los jugadores pueden crear
									y controlar a sus propios Sims, diseñar sus hogares y explorar
									una amplia variedad de opciones de juego. La experiencia única
									de los Sims se centra en la vida simulada, donde cada decisión
									y acción afecta a la vida de los personajes virtuales.
								</IonText>
							</IonItem>
							<IonItem className='custom-section-item'>
								<IonLabel className='tituloscards'>Nuevas expansiones</IonLabel>
								<IonText>
									Comprar expansiones para Los Sims 4 no solo ofrece contenido
									adicional, sino que también enriquece la experiencia de juego.
									Las expansiones pueden incluir nuevas profesiones, lugares,
									interacciones y desafíos, proporcionando a los jugadores más
									opciones y variedad en sus historias virtuales.
								</IonText>
							</IonItem>
							<IonItem className='custom-section-item'>
								<IonLabel className='tituloscards'>
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

export default Tab2
