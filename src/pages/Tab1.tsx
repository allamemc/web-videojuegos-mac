import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonCardContent,
	IonImg,
	IonList,
	IonItem,
	IonLabel,
	IonButton,
	IonChip,
} from '@ionic/react'
import { IonRow, IonCol, IonInput, IonTextarea } from '@ionic/react'
import './Tab1.css'

const Tab1: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					{' '}
					{/* Cambié el color de la barra de herramientas a azul */}
					<IonTitle className='ion-text-center'>Fortnite</IonTitle>{' '}
					{/* Centrado el título */}
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen className='ion-padding'>
				{' '}
				{/* Agregué un poco de padding para mayor espacio */}
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Fortnite</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonCard className='custom-card2'>
					<IonImg src='https://cdn2.unrealengine.com/keyart-overscan-nologo-2-2276x1280-aa06338f9aae.jpg' />{' '}
					{/* La imagen está en el centro por defecto */}
					<IonCardHeader>
						<IonCardSubtitle>Descripción</IonCardSubtitle>
						<IonCardTitle>¿Qué es Fortnite?</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						Fortnite es un videojuego de supervivencia y construcción
						desarrollado por Epic Games. El juego se centra en un mundo
						post-apocalíptico donde los jugadores deben luchar contra hordas de
						monstruos y construir estructuras para protegerse. Fortnite se ha
						convertido en uno de los juegos más populares del mundo, con
						millones de jugadores en todo el mundo.
					</IonCardContent>
					<div className='flexi'>
						<IonButton
							className='boton'
							href='https://www.fortnite.com/?lang=es-ES'>
							Ir a la Web Oficial
						</IonButton>
					</div>
				</IonCard>
				<IonList className='lista'>
					{/* Sección de Modos de Juego */}
					<IonItem>
						<IonLabel>
							<IonChip>
								<IonLabel>Modos de Juego</IonLabel>
							</IonChip>
							<p>
								Fortnite ofrece una variedad de modos de juego, incluyendo
								Battle Royale, Salvar el Mundo y Creativo.
							</p>
						</IonLabel>
					</IonItem>

					{/* Sección de Actualizaciones Recientes */}
					<IonItem>
						<IonLabel>
							<IonChip>
								<IonLabel>Actualizaciones Recientes</IonLabel>
							</IonChip>
							<p>
								Epic Games continúa lanzando actualizaciones y eventos
								emocionantes para mantener fresca la experiencia de juego de
								Fortnite.
							</p>
						</IonLabel>
					</IonItem>

					{/* Sección de Comunidad */}
					<IonItem>
						<IonLabel>
							<IonChip>
								<IonLabel>Comunidad</IonLabel>
							</IonChip>
							<p>
								La comunidad de Fortnite es activa y apasionada, con numerosos
								streamers, torneos y contenido creado por los propios jugadores.
							</p>
						</IonLabel>
					</IonItem>
				</IonList>
				<table className='tablita'>
					<IonRow>
						<IonCol>
							<strong>Modo de Juego</strong>
						</IonCol>
						<IonCol>
							<strong>Descripción</strong>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>Battle Royale</IonCol>
						<IonCol>
							Los jugadores luchan entre sí para ser el último en pie en un mapa
							cada vez más pequeño.
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>Salvar el Mundo</IonCol>
						<IonCol>
							Un modo PvE donde los jugadores luchan contra hordas de zombis y
							construyen fortificaciones.
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>Creativo</IonCol>
						<IonCol>
							Los jugadores pueden construir libremente en su propia isla y
							crear juegos personalizados.
						</IonCol>
					</IonRow>
				</table>
				<IonCard className='formulariooo'>
					<IonCardHeader>
						<IonCardTitle>Contacto</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						<IonList>
							<IonItem>
								<IonLabel position='floating'>Nombre</IonLabel>
								<IonInput></IonInput>
							</IonItem>
							<IonItem>
								<IonLabel position='floating'>Correo Electrónico</IonLabel>
								<IonInput type='email'></IonInput>
							</IonItem>
							<IonItem>
								<IonLabel position='floating'>Mensaje</IonLabel>
								<IonTextarea></IonTextarea>
							</IonItem>
						</IonList>
						<IonButton expand='block'>Enviar</IonButton>
					</IonCardContent>
				</IonCard>
			</IonContent>
		</IonPage>
	)
}

export default Tab1
