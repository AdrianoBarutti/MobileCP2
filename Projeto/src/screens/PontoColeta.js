import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import GoogleMapReact from 'google-map-react';


const Marker = ({ title, description, onClick, isSelected }) => (
  <View onTouchEnd={onClick} style={styles.marker}>
    <View style={styles.markerCircle} />
    {isSelected && (
      <View style={styles.callout}>
        <Text style={styles.calloutTitle}>{title}</Text>
        <Text style={styles.calloutDescription}>{description}</Text>
      </View>
    )}
  </View>
);


const randomCoordinate = (min, max) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(6));

export default function PontoColeta() {
  const [selectedPoint, setSelectedPoint] = useState(null);


  const defaultProps = { center: { lat: -23.6, lng: -46.7 }, zoom: 11 };

  const centerNames = [
    "EcoViva", "VerdeCiclo", "Reciclarte", "GreenHub", "EcoFuturo", "EcoNova", "Recircle",
    "ReciclaPlus", "CicloVerde", "RecicloCenter", "VerdeEco", "Revalorize", "EcoAmigo",
    "PlanetEco", "ReNove", "EcoAção", "VerdeReciclo", "EcoRaiz", "ReciclaMundo", "EcoViver",
    "ReValor", "EcoDínamo", "Novo Reciclo", "GreenPoint", "EcoRota", "EcoPonto", "VerdeViva",
    "ReciclaMais", "Lixo Zero", "GreenReciclo"
  ];


  const ecoPoints = useMemo(() => {
    return centerNames.map((name, idx) => ({
      id: idx + 1,
      title: name,
      description: `${name} - Centro de Descarte`,
      lat: randomCoordinate(-23.70, -23.50),
      lng: randomCoordinate(-46.80, -46.60)
    }));
  }, []);

  return (
    <ImageBackground 
      source={require('../../assets/backgroud.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image 
            source={require('../../assets/coletalixo.png')}
            style={styles.headerImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.mapLabel}>PONTOS DE COLETA EM SÃO PAULO</Text>

        <View style={styles.mapContainer}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyA3-SxMSACMeydGz2w9nOgKn0YhllMn1Dg" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals
          >
            {ecoPoints.map(point => (
              <Marker
                key={point.id}
                lat={point.lat}
                lng={point.lng}
                title={point.title}
                description={point.description}
                isSelected={selectedPoint === point.id}
                onClick={() => setSelectedPoint(selectedPoint === point.id ? null : point.id)}
              />
            ))}
          </GoogleMapReact>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Sobre os Centros de Descarte</Text>
          <Text style={styles.infoText}>
            Os centros de descarte auxiliam na gestão correta dos resíduos recicláveis.
            Em parceria com a prefeitura, traremos mais informações em breve.
            Explore o mapa e veja como você pode contribuir para um meio ambiente mais sustentável!
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,              
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,          
    padding: 20,
    alignItems: 'center',
    paddingBottom: 40,
  },
  header: {
    marginVertical: 20,
    alignItems: 'center',
  },
  headerImage: {
    width: 100, 
    height: 100,
  },
  mapLabel: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#418B4F',
    marginTop: 10,
    textAlign: 'center',
  },
  mapContainer: {
    width: '90%',
    height: 300,
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 20,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Elevação para Android
    elevation: 5,
  },
  infoContainer: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  infoTitle: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#4c4c55',
    textAlign: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: 'rgb(56,56,56)',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  marker: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerCircle: {
    width: 20,
    height: 20,
    backgroundColor: 'green',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  callout: {
    position: 'absolute',
    bottom: 30,
    left: -50,
    width: 120,
    backgroundColor: 'rgba(255,255,255,0.95)',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  calloutDescription: {
    fontSize: 12,
  },
});
