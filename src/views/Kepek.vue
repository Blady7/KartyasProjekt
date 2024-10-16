<template>
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4" 
    v-if="FilteredCharacter.length > 0">
    <KepekComp
      v-for="character in FilteredCharacter"
      :key="character.id"
      :id="character.id"
      @ModalOperating="ModalOperator"
    >
      <!-- itt leszenek a v-slot-ok -->
      <template v-slot:image>
        <img :src="character.image" :alt="character.name" :character="character.name" class="character-image" />
      </template>
      <template v-slot:name>
        <h5 v-html="Find(character.name)"></h5>
      </template>
    </KepekComp>
  </div>
  <CharacterInfo
    :name="Find(chosenCharacter.name)"
  >
    <img :src="chosenCharacter.imageStanding" :alt="chosenCharacter.name"
      class="float-start col-12 col-sm-6 col-lg-4 me-1 p-2 my-picture character-image character-modal-image"
    >
    <div v-html="Find(textFormat)"></div>
</CharacterInfo>
</template>

<script>
class Char {
  constructor(id = 0, name = null, image = null, imageStanding = null, text = null) {
    this.id = id;
    this.name = name;
    this.imageStanding = imageStanding;
    this.image = image;
    this.text = text;
  }
}
import KepekComp from "@/components/KepekComp.vue";
import CharacterInfo from "@/components/CharacterInfo.vue";
export default {
  components: {
    KepekComp,
    CharacterInfo,
  },
  inject: ["searchedWord"],
  data() {
    return {
      chosenCharacter: new Char(),
      favCharacter: [
        {
          id: 1,
          name: "Yae Miko",
          image: "yaemiko.png",
          imageStanding: "yaemiko_allo.png",
          text: [
            "Yae Miko (japánul :八重神子 Yae Miko), más néven Guuji Yae ( japánul :宮司 Guuji ) vagy a Guuji , egy játszható Electro karakter a Genshin Impactban .",
            "A sokoldalú kitsune Yae Miko felügyeli a Grand Narukami Shrine-t , a Yae Kiadó tulajdonosa , és az Eternity szolgája és barátja.",
          ],
        },
        {
          id: 2,
          name: "Xilonen",
          image: "xilonen.png",
          imageStanding: "xilonen_allo.png",
          text: [
            "Xilonen egy játszható Geo karakter a Genshin Impactban .",
            "A Nanatzcayan kovácsa, különösen ügyes abban, hogy megtalálja az egyensúlyt a munkája nehéz feladatai és a jó életvitel között.",
          ],
        },
        {
          id:3,
          name: "Arlecchino",
          image: "arlecchino.png",
          imageStanding: "arlecchino_allo.png",
          text: [
            "Arlecchino , más néven  The Knave  egy játszható Pyro karakter a Genshin Impactban .",
            "Ő a Negyedik a Tizenegy Fatui Hírnök közül és a Tűzhely Házának jelenlegi vezetője . 'Atyának' szólítják a Ház tagjai, akiket 'gyermekeinek' hív.",
          ],
        },
        {
          id: 4,
          name: "Baizhu",
          image: "baizhu.png",
          imageStanding: "baizhu_allo.png",
          text: [
            "Baizhu ( kínai :白术 Báizhú ) egy játszható Dendro karakter a Genshin Impactban .",
            "A Bubu gyógyszertár tulajdonosa és Qiqi gyámja, Doktor Baizhu a gyógyászati ​​művészetek mestere, és a Changsheng nevű fehér kígyóval kötött generációs szerződés legújabb címzettje . Arra törekszik, hogy elérje a halhatatlanságot, hogy biztosítsa, ő legyen az utolsó, aki valaha is viseli szerződését, megmentve ezzel a potenciális örökösöket, sőt magát Changshenget is a hatalmával járó költségektől.",
          ],
        },
        {
          id: 5,
          name: "Yelan",
          image: "yelan.png",
          imageStanding: "yelan_allo.png",
          text: [
            "Yelan ( kínai :夜兰 Yèlán ) egy játszható Hydro karakter a Genshin Impactban .",
            "Ő egy titokzatos személy, aki azt állítja, hogy a Polgári Ügyek Minisztériumának dolgozik , de nem szereplőként szerepel a listán. Azt is állítja, hogy a Yanshang Teahouse -nak dolgozik , de csak valódi munkájára használja, egy titkosszolgálati ügynökként, aki együttműködik Ningguanggal .",
          ],
        },
        {
          id: 6,
          name: "Furina",
          image: "furina.png",
          imageStanding: "furina_allo.png",
          text: [
            "Furina de Fontaine egy játszható Hydro karakter a Genshin Impactban, aki váltogathatja a Pneuma és az Ousia elrendezést.",
            "A rikító és túlságosan magabiztos Hydro Archonként bemutatott Furina színjátszásáról végül kiderül, hogy közszereplő, amit később elvet, és színésznőként és művészeti tanácsadóként viszonylag szerényebb életet él.",
          ],
        },
        {
          id: 7,
          name: "Nahida",
          image: "nahida.png",
          imageStanding: "nahida_allo.png",
          text: [
            "Nahida egy játszható Dendro karakter a Genshin Impactban .",
            "Kisebb Lord Kusanaliként arra törekszik, hogy erősebb jelenléte legyen Sumeruban, most , hogy megszabadult a Surasthana szentélyében lévő kiterjedt bezártságától .",
          ],
        },
        {
          id: 8,
          name: "Zhongli",
          image: "zhongli.png",
          imageStanding: "zhongli_allo.png",
          text: [
            "Zhongli ( kínai :钟离 Zhōnglí ) egy játszható Geo karakter a Genshin Impactban .",
            "A Wangsheng temetkezési szalon tanácsadója , akiről később kiderül, hogy ő a Geo Archon , Morax , aki úgy döntött, hogy egy halandó szemszögéből tapasztalja meg a világot.",
          ],
        },
      ],
    };
  },
  methods: {
    ModalOperator(id) {
      this.chosenCharacter = this.favCharacter.filter((c) => c.id == id.id)[0];
    },
    Find(text) {
      if (this.searchedWord) {
        let what = new RegExp(this.searchedWord, "gi");
        if (text) {
          text = text.replace(what, (match) => {
            return `<span class="mark p-0">${match}</span>`;
          });
        }
        return text;
      } else {
        return text;
      }
    },
  },
  computed: {
    textFormat() {
      if (this.chosenCharacter.text == null) {
        return `<p></p>`;
      }
      return this.chosenCharacter.text.map((t) => `<p>${t}</p>`).join("");
    },
    FilteredCharacter() {
      if (!this.searchedWord) {
        return this.favCharacter;
      }
      return this.favCharacter.filter((c) => {
        return (
            c.name.toLowerCase().includes(this.searchedWord.toLowerCase()) ||
            c.text.some((c) =>
                c.toLowerCase().includes(this.searchedWord.toLowerCase())
          )
        );
      });
    },
  },
};
</script>

<style>
.character-image {
  width: 100%;
}

</style>
