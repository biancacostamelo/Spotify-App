import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Buscar() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <View style={style.perquisa}>
            <TextInput
              placeholder="O que você quer ouvir?"
              style={style.input}
            />
            <AntDesign
              name="search1"
              size={24}
              color="black"
              style={style.iconPesquisa}
            />
          </View>
          <Text style={style.textWhite}> Musicas que você pode gostar </Text>
          <ScrollView horizontal>
            <View style={style.containerMusicas}>
              <View style={style.imgContainer}>
                <Image
                  style={style.imgContain}
                  source={require('../assets/buscar/bruno-mars.jpeg')}
                />
              </View>

              <View style={style.imgContainer}>
                <Image
                  style={style.imgContain}
                  source={require('../assets/buscar/album-musica.jpg')}
                />
              </View>

              <View style={style.imgContainer}>
                <Image
                  style={style.imgContain}
                  source={require('../assets/buscar/album-musica2.jpg')}
                />
              </View>
            </View>
          </ScrollView>
          <Text style={style.textWhite}> Musicas que você pode gostar </Text>
          <View style={style.playlistHome}>
            <View style={style.rowPlaylist}>
              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require('../assets/home/favoritosSpotify.png')}
                />
                <Text style={style.textFixo}> Favoritos</Text>
              </View>

              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require('../assets/home/articMonkeys.jpg')}
                />
                <Text style={style.textFixo}>Arctic Monkeys</Text>
              </View>
            </View>

            <View style={style.rowPlaylist}>
              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require('../assets/buscar/album-musica2.jpg')}
                />
                <Text style={style.textFixo}> Favoritos</Text>
              </View>

              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require('../assets/buscar/album-musica3.jpg')}
                />
                <Text style={style.textFixo}>Arctic Monkeys</Text>
              </View>
            </View>

            <View style={style.rowPlaylist}>
              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require('../assets/buscar/fundo-show.jpg')}
                />
                <Text style={style.textFixo}> Favoritos</Text>
              </View>

              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require('../assets/buscar/imagem-show.jpg')}
                />
                <Text style={style.textFixo}>Arctic Monkeys</Text>
              </View>
            </View>

            <View style={style.rowPlaylist}>
              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require('../assets/home/favoritosSpotify.png')}
                />
                <Text style={style.textFixo}> Favoritos</Text>
              </View>

              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require('../assets/home/articMonkeys.jpg')}
                />
                <Text style={style.textFixo}>Arctic Monkeys</Text>
              </View>
            </View>

            <View style={style.rowPlaylist}>
              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require('../assets/buscar/album-musica2.jpg')}
                />
                <Text style={style.textFixo}> Favoritos</Text>
              </View>

              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require('../assets/buscar/album-musica3.jpg')}
                />
                <Text style={style.textFixo}>Arctic Monkeys</Text>
              </View>
            </View>

            <View style={style.rowPlaylist}>
              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require('../assets/buscar/fundo-show.jpg')}
                />
                <Text style={style.textFixo}> Favoritos</Text>
              </View>

              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require('../assets/buscar/imagem-show.jpg')}
                />
                <Text style={style.textFixo}>Arctic Monkeys</Text>
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
    paddingHorizontal: 10,
    display: 'flex',
    gap: 20,
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
  input: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    fontSize: 15,
    paddingLeft: 40,
    borderRadius: 5,
  },
  perquisa: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  iconPesquisa: {
    position: 'absolute',
    left: 10,
  },
  tituloWhite: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 700,
  },
  textWhite: {
    color: '#fff',
    fontWeight: 500,
    fontSize: 13,
  },
  textFixo: {
    color: '#fff',
    fontWeight: 500,
    fontSize: 13,
    position: 'absolute',
    top: 10,
    left: 10,
    textShadowColor: 'black',
    textShadowRadius: 15,
  },
  imgContainer: {
    backgroundColor: 'cyan',
    width: '90%',
    height: 230,
    borderRadius: 10,
    overflow: 'hidden',
  },
  containerMusicas: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
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
    width: '48.5%',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    gap: 12,
    position: 'relative',
  },
  imgPlaylist: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
  },
  playlistHome: {
    display: 'flex',
    gap: 12,
  },
});
