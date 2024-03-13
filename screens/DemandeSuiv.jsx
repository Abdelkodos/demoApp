import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { fetchData, selectData, selectPrestations, store } from '../store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const InfoArea = (props) => {

  const { title, price, status } = props
  

  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 8,
        width: 320,
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: -2, height: 20},
        shadowRadius: 120,
        margin: 6
    }}>
      <View style={{ width: 140 }}>
        <Text style={{ fontSize: 13, fontWeight: 600 }} >{ title }</Text>
        { typeof price === 'number' ? <Text style={{ color: '#787579', fontSize: 11, fontWeight: 700 }} >{ price } MAD</Text> : <Text style={{ color: '#787579', fontSize: 11, fontWeight: 700 }} >{ price } </Text> }
        
      </View>
      <View style={{
        height: 24, borderRadius: 9, justifyContent: 'center', alignItems: 'center',
        width: status === 'accepted' ? 66 : status === 'inProgress' ? 68 : status === 'refused' ? 57 : 80,
        backgroundColor: status === 'accepted' ? '#6FB820' : status === 'inProgress' ? '#F5A61D' : status === 'refused' ? '#DA4840' : '#1EA1D2',
        
      }}>
        <Text style={{
          fontSize: 11, fontWeight: 700, color: "#FFF"
        }}> { status === 'accepted' ? 'Accepté' : status === 'inProgress' ? 'En cours' : status === 'refused' ? 'Refusé' : 'En attente' } </Text>
      </View>
      
      <MaterialIcons name="arrow-forward-ios" size={18} color="#787579" />
    </View>
  )
}

const DataDisplay = (props) => {

  const { type } = props
  const data = useSelector(selectData)

  useEffect(() => {
    // dispatch(fetchData())
    console.log(data)
  }, [data])

  /* const prestations = [
    {
      id: 1,
      prestation: 'Crédit IMTILAK',
      status: 'accepted',
      price: 280_000
    },
    {
      id: 2,
      prestation: 'Crédit YASSIR',
      status: 'inProgress',
      price: 20_000
    },
    {
      id: 3,
      prestation: 'Aide au Préscolaire',
      status: 'refused',
      price: 'Hayat BEN ALLA'
    },
    {
      id: 4,
      prestation: 'Pèlerinage',
      status: 'inProgress',
      price: 'Ahmed BEN ALLA'
    },
    {
      id: 5,
      prestation: 'Fond de soutien',
      status: 'inProgress',
      price: 'Ahmed BEN ALLA'
    },
    {
      id: 6,
      prestation: 'Nafida 2 (Internet)',
      status: 'accepted',
      price: 'Ahmed BEN ALLA'
    },
    {
      id: 7,
      prestation: 'Nafida 2 (Subvention)',
      status: 'attended',
      price: 'Ahmed BEN ALLA'
    },
    {
      id: 8,
      prestation: "Bourse d'étude",
      status: 'inProgress',
      price: 'Salah BEN ALLA'
    },
  ] */

  if ( data ) {
    return (
      <View style={{ paddingHorizontal: 10 }} >
        <Text style={{ fontSize: 16, fontWeight: 700, paddingVertical: 14 }} >Demandes de { type === 'information' ? 'informations' : type === 'prestation' ? 'prestations' : 'reclamations'  }</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 235, marginHorizontal: 9 }} >
          <Text style={{ color: '#787579', fontSize: 12 }} >    Intitulé</Text>
          <Text style={{ color: '#787579', fontSize: 12 }} >Statut</Text>
        </View>
        { 
            type === 'presentation' ? data.prestations.map((prestation) => <InfoArea title={prestation.prestation} price={prestation.price} status={prestation.status} />) : type === 'information' ? data.informations.map((information) => <InfoArea title={information.information} price={information.price} status={information.status} />) : type === 'reclamation' ? data.reclamations.map((reclamation) => <InfoArea title={reclamation.reclamation} price={reclamation.price} status={reclamation.status} />)
          
          :
            <Text>No DATA</Text>        
            
                    
        }
      </View>
    )
  }
  if ( data === undefined ) {
    return (
      <View style={{ paddingHorizontal: 10 }} >        
        <Text>No DATA</Text>
      </View>
    )
  }
  
}

const DemandeSuiv = () => {

  const state = store.getState()
  const [ dataType, setDataType ] = React.useState('information')
  

  return (
    
    <View style={{ alignItems: 'center', backgroundColor: '#FAFAFA' }}>
      {/* Navigation entre prestations, informations, réclamations */}
      <View style={{ height: 52, width: 400, backgroundColor: '#F4EAE9', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 16 }} >
        <TouchableOpacity 
        style={{ 
          backgroundColor: dataType === 'presentation' ? '#822C41' : '#FFF',
          width: 104, height: 32, borderRadius: 8, justifyContent: 'center', alignItems: 'center',
          elevation: 8,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: { width: -2, height: 20},
          shadowRadius: 120, }}
        onPress={() => {
          setDataType('presentation')
        }}
        >
          <Text style={{ fontWeight: 700, fontSize: 12, 
            color: dataType === 'presentation' ? '#FFF' : '#000'
          }} >Prestations</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{ 
          backgroundColor: dataType === 'information' ? '#822C41' : '#FFF', 
          width: 104, height: 32, borderRadius: 8, justifyContent: 'center', alignItems: 'center',
          elevation: 8,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: { width: -2, height: 20},
          shadowRadius: 120, }}
          onPress={() => {
            setDataType('information')
          }}
          >
          <Text style={{ fontWeight: 700, fontSize: 12,
            color: dataType === 'information' ? '#FFF' : '#000'
          }} >Informations</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{ 
          backgroundColor: dataType === 'reclamation' ? '#822C41' : '#FFF', 
          width: 104, height: 32, borderRadius: 8, justifyContent: 'center', alignItems: 'center',
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: -2, height: 20},
        shadowRadius: 120, }}
        onPress={() => {
          setDataType('reclamation')
        }}
        >
          <Text style={{ fontWeight: 700, fontSize: 12,
            color: dataType === 'reclamation' ? '#FFF' : '#000'
          }} >Réclamations</Text>
        </TouchableOpacity>
      </View>
          <DataDisplay type={dataType} />
          
      
    </View>
  )
}

export default DemandeSuiv