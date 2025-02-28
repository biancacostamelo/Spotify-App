import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <View style={style.nav}>
            <View style={style.usuario}>
              <Text style={style.paragrafo}>B</Text>
            </View>

            <View style={style.viewNavegacao}>
              <Text style={style.textWhite}>Tudo</Text>
            </View>

            <View style={style.viewNavegacao}>
              <Text style={style.textWhite}>Música</Text>
            </View>

            <View style={style.viewNavegacao}>
              <Text style={style.textWhite}>Podcasts</Text>
            </View>
          </View>

          <View style={style.playlistHome}>
            <View style={style.rowPlaylist}>
              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require("../assets/home/favoritosSpotify.png")}
                />
                <Text style={style.textWhite}> Favoritos</Text>
              </View>

              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require("../assets/home/articMonkeys.jpg")}
                />
                <Text style={style.textWhite}>Arctic Monkeys</Text>
              </View>
            </View>

            <View style={style.rowPlaylist}>
              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require("../assets/home/lanaDelRey.png")}
                />
                <Text style={style.textWhite}>Lana Del Rey</Text>
              </View>

              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require("../assets/home/billie.png")}
                />
                <Text style={style.textWhite}>Billie Eilish</Text>
              </View>
            </View>

            <View style={style.rowPlaylist}>
              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require("../assets/home/brunoMars.jpg")}
                />
                <Text style={style.textWhite}>Bruno Mars</Text>
              </View>

              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require("../assets/home/TheWeeknd.png")}
                />
                <Text style={style.textWhite}>The Weeknd</Text>
              </View>
            </View>

            <View style={style.rowPlaylist}>
              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require("../assets/home/girlined.jpg")}
                />
                <Text style={style.textWhite}>Girl In Red</Text>
              </View>

              <View style={style.playlist}>
                <Image
                  style={style.imgPlaylist}
                  source={require("../assets/home/janisJoplin.jpg")}
                />
                <Text style={style.textWhite}>Janis Joplin</Text>
              </View>
            </View>
          </View>

          <Text style={style.tituloWhite}>100% Você</Text>

          <View style={style.playlistPersonalizada}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={style.cardPlaylist}>
                <Image
                  style={style.imgCardPlaylist}
                  source={require("../assets/home/janisJoplin.jpg")}
                />
                <Text style={style.textWhite}>Seu dia em uma playlist</Text>
              </View>

              <View style={style.cardPlaylist}>
                <Image
                  style={style.imgCardPlaylist}
                  source={require("../assets/home/cheapThrills.jpg")}
                />
                <Text style={style.textWhite}>
                  Musicas que você está curtindo agora
                </Text>
              </View>

              <View style={style.cardPlaylist}>
                <Image
                  style={style.imgCardPlaylist}
                  source={require("../assets/home/gunsNRoses.jpg")}
                />
                <Text style={style.textWhite}>Recordar é viver!</Text>
              </View>

              <View style={style.cardPlaylist}>
                <Image
                  style={style.imgCardPlaylist}
                  source={require("../assets/home/ladyGaga.jpg")}
                />
                <Text style={style.textWhite}>
                  Musicas que você pode gostar
                </Text>
              </View>
            </ScrollView>
          </View>
          <Text style={style.tituloWhite}>100% Você</Text>
          <View style={style.playlistPersonalizada}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={style.cardPlaylist}>
                <Image
                  style={style.imgCardPlaylist}
                  source={require("../assets/home/ladyGaga.jpg")}
                />
                <Text style={style.textWhite}>Seu dia em uma playlist</Text>
              </View>

              <View style={style.cardPlaylist}>
                <Image
                  style={style.imgCardPlaylist}
                  source={require("../assets/home/gunsNRoses.jpg")}
                />
                <Text style={style.textWhite}>
                  Musicas que você está curtindo agora
                </Text>
              </View>

              <View style={style.cardPlaylist}>
                <Image
                  style={style.imgCardPlaylist}
                  source={require("../assets/home/janisJoplin.jpg")}
                />
                <Text style={style.textWhite}>Recordar é viver!</Text>
              </View>

              <View style={style.cardPlaylist}>
                <Image
                  style={style.imgCardPlaylist}
                  source={require("../assets/home/cheapThrills.jpg")}
                />
                <Text style={style.textWhite}>
                  Musicas que você pode gostar
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    display: "flex",
    gap: 20,
    paddingHorizontal: 10,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  usuario: {
    width: 27,
    height: 27,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D7522C",
    borderRadius: 50,
  },
  paragrafo: {
    color: "#000",
    fontSize: 16,
    fontWeight: 600,
  },
  viewNavegacao: {
    backgroundColor: "#1E1E1E",
    paddingVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  textWhite: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 13,
  },
  playlistHome: {
    display: "flex",
    gap: 12,
  },
  rowPlaylist: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    height: 60,
    justifyContent: "space-between",
  },
  playlist: {
    backgroundColor: "#232323",
    borderRadius: 7,
    width: "48.5%",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    gap: 12,
  },
  imgPlaylist: {
    width: "34%",
    height: "100%",
    borderRadius: 7,
  },
  playlistPersonalizada: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  tituloWhite: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 700,
  },
  cardPlaylist: {
    width: 180,
    height: 250,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    paddingHorizontal: 10,
  },
  imgCardPlaylist: {
    height: "68%",
    width: "100%",
    borderRadius: 13,
  },
});
