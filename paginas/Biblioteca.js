import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
  ScrollView,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Biblioteca() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.nav}>
          <View style={style.viewNavegacao}>
            <Text style={style.textWhite}>Tudo</Text>
          </View>

          <View style={style.viewNavegacao}>
            <Text style={style.textWhite}>Música</Text>
          </View>

          <View style={style.viewNavegacao}>
            <Text style={style.textWhite}>Podcasts</Text>
          </View>

          <View style={style.viewNavegacao}>
            <Text style={style.textWhite}>Música</Text>
          </View>
        </View>

        <View style={style.filtro}>
          <View style= {style.center}>
            <Ionicons name="filter" size={20} color="white" />
            <Text style={style.textWhite}> Recentes</Text>
          </View>
          <View>
            <Ionicons
              name="grid-outline"
              size={20}
              color="white"
              style={style.icon}
            />
          </View>
        </View>

        <View style={style.playlistHome}>
          <View style={style.rowPlaylist}>
            <View style={style.playlist}>
              <Image
                style={style.imgPlaylist}
                source={require('../assets/home/favoritosSpotify.png')}
              />
              <View>
                <Text style={style.textFixo}>Favoritos</Text>
                <Text style={style.textFixo}>Playlist - bianca</Text>
              </View>
            </View>
          </View>

          <View style={style.rowPlaylist}>
            <View style={style.playlist}>
              <Image
                style={style.imgPlaylist}
                source={require('../assets/buscar/album-musica2.jpg')}
              />
              <View>
                <Text style={style.textFixo}>Relax</Text>
                <Text style={style.textFixo}>Playlist - bianca</Text>
              </View>
            </View>
          </View>

          <View style={style.rowPlaylist}>
            <View style={style.playlist}>
              <Image
                style={style.imgPlaylist}
                source={require('../assets/buscar/show-imagem.jpg')}
              />
              <View>
                <Text style={style.textFixo}>Bandas</Text>
                <Text style={style.textFixo}>Playlist - bianca</Text>
              </View>
            </View>
          </View>

          <View style={style.rowPlaylist}>
            <View style={style.playlist}>
              <Image
                style={style.imgPlaylist}
                source={require('../assets/home/janisJoplin.jpg')}
              />
              <View>
                <Text style={style.textFixo}>Janis</Text>
                <Text style={style.textFixo}>Playlist - bianca</Text>
              </View>
            </View>

          </View>

          <View style={style.rowPlaylist}>
            <View style={style.playlist}>
              <Image
                style={style.imgPlaylist}
                source={require('../assets/buscar/bruno-mars.jpeg')}
              />
              <View>
                <Text style={style.textFixo}>Bruno Mars</Text>
                <Text style={style.textFixo}>Playlist - bianca</Text>
              </View>
            </View>
          </View>

          <View style={style.rowPlaylist}>
            <View style={style.playlist}>
              <Image
                style={style.imgPlaylist}
                source={require('../assets/buscar/album-musica3.jpg')}
              />
              <View>
                <Text style={style.textFixo}>MPB</Text>
                <Text style={style.textFixo}>Playlist - bianca</Text>
              </View>
            </View>
          </View>

          <View style={style.rowPlaylist}>
            <View style={style.playlist}>
              <Image
                style={style.imgPlaylist}
                source={require('../assets/buscar/fundo-show.jpg')}
              />
              <View>
                <Text style={style.textFixo}>Vintage</Text>
                <Text style={style.textFixo}>Playlist - bianca</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    paddingHorizontal: 20
  },
  center: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  filtro: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  icon: {
    alignSelf: 'flex-end',
  },
  imgContain: {
    width: '100%',
    height: '100%',
  },
  rowPlaylist: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
  },
  playlist: {
    backgroundColor: '#232323',
    borderRadius: 7,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    gap: 12,
    position: 'relative',
  },
  imgPlaylist: {
    width: '25%',
    height: '100%',
    borderRadius: 7,
  },
  playlistHome: {
    display: 'flex',
    gap: 12,
  },
  textFixo: {
    color: 'white',
  },
  textContain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  usuario: {
    width: 27,
    height: 27,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7522C',
    borderRadius: 50,
  },
  paragrafo: {
    color: '#000',
    fontSize: 16,
    fontWeight: 600,
  },
  viewNavegacao: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  textWhite: {
    color: '#fff',
    fontWeight: 500,
    fontSize: 13,
  },
});
