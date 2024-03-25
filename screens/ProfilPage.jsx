import { View, Text, Button, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../store'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

const ProfilPage = () => {
  const dispatch = useDispatch()
  const [ nav, setNav ] = useState("profil")
  // dispatch(fetchUser())
  const user = useSelector(selectUser)
  const userName = user.fullName.split(" ")
  const arUserName = user.arName.split(" ")

  return (
    <View style={{ flex: 1 }} >
      <View style={{ height: 52, width: 400, backgroundColor: '#F4EAE9', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 16 }} >
        <Pressable
          onPress={() => { setNav("profil") }}
          style={ nav === "profil" ? { backgroundColor: "#822C41", width: 165, height: 32, borderRadius: 8, justifyContent: "center" } : { backgroundColor: "#FFF", width: 165, height: 32, borderRadius: 8, justifyContent: "center", elevation: 8,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: { width: -2, height: 20},
          shadowRadius: 120 }}
        ><Text style={ nav === "profil" ? { color: "#fff", fontSize: 12, fontWeight: 700, textAlign: "center" } : { color: "#000", fontSize: 12, fontWeight: 700, textAlign: "center" }} >Mon profil</Text></Pressable>
        <Pressable
          onPress={() => { setNav("beneficiaries") }}
          style={ nav === "beneficiaries" ? { backgroundColor: "#822C41", width: 165, height: 32, borderRadius: 8, justifyContent: "center" } : { backgroundColor: "#FFF", width: 165, height: 32, borderRadius: 8, justifyContent: "center", elevation: 8,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: { width: -2, height: 20},
          shadowRadius: 120 }}
        ><Text style={ nav === "beneficiaries" ? { color: "#fff", fontSize: 12, fontWeight: 700, textAlign: "center" } : { color: "#000", fontSize: 12, fontWeight: 700, textAlign: "center" }} >Mon bénéficiaires</Text>
        </Pressable>
      </View>
      { nav === "profil" ?
        <View style={{  }} >
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 25, alignItems: "center", height: 112, backgroundColor: "#fff" }} >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", width: 200 }} >
            <Image source={require("../assets/profilIcon.png")} style={{ width: 72, height: 72, paddingHorizontal: 14 }} />
            <View
              style={{

              }}
            >
              <Text
                style={{
                  color: "#251F21",
                  fontWeight: 700,
                  fontSize: 14
                }}
              >
                {user.fullName}
              </Text>
              <Text
                style={{
                  color: "#251F21",
                  fontSize: 14,
                  width: 62
                }}
              >
                {user.arName}
              </Text>
              <View style={{
                backgroundColor: '#822C41',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 3,
                width: 90
              }}>
                <Text style={{ color: '#FFF', fontWeight: '700', fontSize: 11 }}>N°{user.userId}/000</Text>
              </View>
            </View>
          </View>
          
          <Image source={require('../assets/FAB.png')} style={{ width: 52, height: 52, elevation: 16, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: -2, height: 30}, shadowRadius: 28 }} />
        </View>
        <View style={{ height: 56, flexDirection: "row", justifyContent: "center", backgroundColor: "#FFF", marginVertical: 2, alignItems: "center"}} >
          <View style={{ height: 56, flexDirection: "row", justifyContent: "space-between", width: 350, backgroundColor: "#FFF", alignItems: "center"}} >
            <Text style={{ color: "#822C41", fontSize: 12, fontWeight: 600 }} >Statut</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <Ionicons name="checkmark-circle-sharp" size={24} color="#6FB820" />
              <Text style={{ color: "#6FB820", fontSize: 14, fontWeight: 500 }} >{ user.status === "valid" ? "Validé" : "non validé" }</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 56, flexDirection: "row", justifyContent: "center", backgroundColor: "#FFF", marginVertical: 2, alignItems: "center"}} >
          <View style={{ height: 56, flexDirection: "row", justifyContent: "space-between", width: 350, backgroundColor: "#FFF", alignItems: "center"}} >
            <Text style={{ color: "#822C41", fontSize: 12, fontWeight: 600 }} >Type d'adhérent</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <Text style={{ color: "#4E4446", fontSize: 14, fontWeight: 500 }} >{ user.gender === "male" ? "MEN/MES" : "non validé" }</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 56, flexDirection: "row", justifyContent: "center", backgroundColor: "#FFF", marginVertical: 2, alignItems: "center"}} >
          <View style={{ height: 56, flexDirection: "row", justifyContent: "space-between", width: 350, backgroundColor: "#FFF", alignItems: "center"}} >
            <Text style={{ color: "#822C41", fontSize: 12, fontWeight: 600 }} >Prénom (FR)</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <Text style={{ color: "#4E4446", fontSize: 14, fontWeight: 500 }} >{ userName[0] }</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 56, flexDirection: "row", justifyContent: "center", backgroundColor: "#FFF", marginVertical: 2, alignItems: "center"}} >
          <View style={{ height: 56, flexDirection: "row", justifyContent: "space-between", width: 350, backgroundColor: "#FFF", alignItems: "center"}} >
            <Text style={{ color: "#822C41", fontSize: 12, fontWeight: 600 }} >Prénom (AR)</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <Text style={{ color: "#4E4446", fontSize: 14, fontWeight: 500 }} >{ arUserName[0] }</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 56, flexDirection: "row", justifyContent: "center", backgroundColor: "#FFF", marginVertical: 2, alignItems: "center"}} >
          <View style={{ height: 56, flexDirection: "row", justifyContent: "space-between", width: 350, backgroundColor: "#FFF", alignItems: "center"}} >
            <Text style={{ color: "#822C41", fontSize: 12, fontWeight: 600 }} >Nom (FR)</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <Text style={{ color: "#4E4446", fontSize: 14, fontWeight: 500 }} >{ userName[1] + " " + userName[2] }</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 56, flexDirection: "row", justifyContent: "center", backgroundColor: "#FFF", marginVertical: 2, alignItems: "center"}} >
          <View style={{ height: 56, flexDirection: "row", justifyContent: "space-between", width: 350, backgroundColor: "#FFF", alignItems: "center"}} >
            <Text style={{ color: "#822C41", fontSize: 12, fontWeight: 600 }} >Nom (AR)</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <Text style={{ color: "#4E4446", fontSize: 14, fontWeight: 500 }} >{ arUserName[1] + " " + arUserName[2] }</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 56, flexDirection: "row", justifyContent: "center", backgroundColor: "#FFF", marginVertical: 2, alignItems: "center"}} >
          <View style={{ height: 56, flexDirection: "row", justifyContent: "space-between", width: 350, backgroundColor: "#FFF", alignItems: "center"}} >
            <Text style={{ color: "#822C41", fontSize: 12, fontWeight: 600 }} >Ville</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <Text style={{ color: "#4E4446", fontSize: 14, fontWeight: 500 }} >{ user.city }</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 100, flexDirection: "row", backgroundColor: "#FFF", marginVertical: 2, justifyContent: "center", alignItems: "center" }} >
          <View style={{ height: 56, flexDirection: "column", width: 350, backgroundColor: "#FFF" }} >
            <Text style={{ color: "#822C41", fontSize: 12, fontWeight: 600 }} >Adresse personnelle (FR)</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <Text style={{ color: "#4E4446", fontSize: 14, fontWeight: 500 }} >{ user.adress }</Text>
            </View>
          </View>
        </View>
        
        
      </View> :
      <View style={{ alignItems: "flex-start" }} >
        <View style={{ paddingHorizontal: 20 }} >
          <Text style={{ fontSize: 16, fontWeight: 700, paddingVertical: 14 }} >Liste des bénéficiaires</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 235, marginHorizontal: 9 }} >
            <Text style={{ color: '#787579', fontSize: 12 }} >Bénéficiaire</Text>
            <Text style={{ color: '#787579', fontSize: 12 }} >N° d'Adhérent</Text>
          </View>
          {/* Zone de présentation des bénéficiaires */}
          {/* début */}
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
            <View style={{ width: 100, justifyContent: "flex-start", flexDirection: "column" }}>
              <Text style={{ fontSize: 13, fontWeight: 600, paddingVertical: 4 }} >Meriem NACERI</Text>
              <Text style={{ fontSize: 13, fontWeight: 600, width: 65 }} >مريم الناصري</Text>
              <Text style={{ color: '#787579', fontSize: 11, fontWeight: 700 }} >Conjoint</Text>
              
            </View>
            <View style={{
              backgroundColor: '#822C41',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 3,
              width: 90
            }}>
              <Text style={{ color: '#FFF', fontWeight: '700', fontSize: 11 }}>N°267898/000</Text>
            </View>
            
            <MaterialIcons name="arrow-forward-ios" size={18} color="#787579" />
          </View>
          {/* fin */}
          {/* début */}
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
            <View style={{ width: 100, justifyContent: "flex-start", flexDirection: "column" }}>
              <Text style={{ fontSize: 13, fontWeight: 600, paddingVertical: 4 }} >Salah BEN ALLA</Text>
              <Text style={{ fontSize: 13, fontWeight: 600, width: 65 }} >صلاح بن علة</Text>
              <Text style={{ color: '#787579', fontSize: 11, fontWeight: 700 }} >Enfant</Text>
              
            </View>
            <View style={{
              backgroundColor: '#822C41',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 3,
              width: 90
            }}>
              <Text style={{ color: '#FFF', fontWeight: '700', fontSize: 11 }}>N°267898/101</Text>
            </View>
            
            <MaterialIcons name="arrow-forward-ios" size={18} color="#787579" />
          </View>
          {/* fin */}
          {/* début */}
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
            <View style={{ width: 100, justifyContent: "flex-start", flexDirection: "column" }}>
              <Text style={{ fontSize: 13, fontWeight: 600, paddingVertical: 4 }} >Hayat BEN ALLA</Text>
              <Text style={{ fontSize: 13, fontWeight: 600, width: 65 }} >حياة بن علة</Text>
              <Text style={{ color: '#787579', fontSize: 11, fontWeight: 700 }} >Enfant</Text>
              
            </View>
            <View style={{
              backgroundColor: '#822C41',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 3,
              width: 90
            }}>
              <Text style={{ color: '#FFF', fontWeight: '700', fontSize: 11 }}>N°267898/000</Text>
            </View>
            
            <MaterialIcons name="arrow-forward-ios" size={18} color="#787579" />
          </View>
          {/* fin */}
        </View>
      </View> 
      
      }
      
      
      
    </View>
  )
}

export default ProfilPage