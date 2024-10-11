<template>
  <div class="container-fluid2">
    <div class="row justify-content-center">
      <table class="col-md-8">
        <thead>
          <tr>
            <th scope="col" @click="sortTable('name')">Name</th>
            <th scope="col" @click="sortTable('rarity')">Rarity</th>
            <th scope="col" @click="sortTable('vision')">Vision</th>
            <th scope="col" @click="sortTable('weaponType')">Weapon Type</th>
            <th scope="col" @click="sortTable('region')">Region</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="character in filteredCharacters" :key="character.id">
            <td>{{ character.name }}</td>
            <td>{{ character.rarity }}</td>
            <td>{{ character.vision }}</td>
            <td>{{ character.weaponType }}</td>
            <td>{{ character.region }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["searchedWord"],
  data() {
    return {
      allCharacter: [
        {
          id: 1,
          name: "Albedo",
          rarity: "5 star",
          vision: "Geo",
          weaponType: "Sword",
          region: "Mondstadt",
        },
        {
          id: 2,
          name: "Amber",
          rarity: "4 star",
          vision: "Pyro",
          weaponType: "Bow",
          region: "Mondstadt",
        },
        {
          id: 3,
          name: "Arataki Itto",
          rarity: "5 star",
          vision: "Geo",
          weaponType: "Claymore",
          region: "Inazuma",
        },
        {
          id: 4,
          name: "Baizhu",
          rarity: "5 star",
          vision: "Dendro",
          weaponType: "Catalyst",
          region: "Liyue",
        },
        {
          id: 5,
          name: "Barbara",
          rarity: "4 star",
          vision: "Hydro",
          weaponType: "Catalyst",
          region: "Mondstadt",
        },
        {
          id: 6,
          name: "Beidou",
          rarity: "4 star",
          vision: "Electro",
          weaponType: "Claymore",
          region: "Liyue",
        },
        {
          id: 7,
          name: "Bennett",
          rarity: "4 star",
          vision: "Pyro",
          weaponType: "Sword",
          region: "Mondstadt",
        },
        {
          id: 8,
          name: "Candace",
          rarity: "4 star",
          vision: "Hydro",
          weaponType: "Polearm",
          region: "Sumeru",
        },
        {
          id: 9,
          name: "Chongyun",
          rarity: "4 star",
          vision: "Cryo",
          weaponType: "Claymore",
          region: "Liyue",
        },
        {
          id: 10,
          name: "Collei",
          rarity: "4 star",
          vision: "Dendro",
          weaponType: "Bow",
          region: "Sumeru",
        },
        {
          id: 11,
          name: "Cyno",
          rarity: "5 star",
          vision: "Electro",
          weaponType: "Polearm",
          region: "Sumeru",
        },
        {
          id: 12,
          name: "Dehya",
          rarity: "5 star",
          vision: "Pyro",
          weaponType: "Claymore",
          region: "Sumeru",
        },
        {
          id: 13,
          name: "Diluc",
          rarity: "5 star",
          vision: "Pyro",
          weaponType: "Claymore",
          region: "Mondstadt",
        },
        {
          id: 14,
          name: "Diona",
          rarity: "4 star",
          vision: "Cryo",
          weaponType: "Bow",
          region: "Mondstadt",
        },
        {
          id: 15,
          name: "Dori",
          rarity: "4 star",
          vision: "Electro",
          weaponType: "Claymore",
          region: "Sumeru",
        },
        {
          id: 16,
          name: "Eula",
          rarity: "5 star",
          vision: "Cryo",
          weaponType: "Claymore",
          region: "Mondstadt",
        },
        {
          id: 17,
          name: "Faruzan",
          rarity: "4 star",
          vision: "Anemo",
          weaponType: "Bow",
          region: "Sumeru",
        },
        {
          id: 18,
          name: "Fischl",
          rarity: "4 star",
          vision: "Electro",
          weaponType: "Bow",
          region: "Mondstadt",
        },
        {
          id: 19,
          name: "Freminet",
          rarity: "4 star",
          vision: "Cryo",
          weaponType: "Claymore",
          region: "Fontaine",
        },
        {
          id: 20,
          name: "Ganyu",
          rarity: "5 star",
          vision: "Cryo",
          weaponType: "Bow",
          region: "Liyue",
        },
        {
          id: 21,
          name: "Gorou",
          rarity: "4 star",
          vision: "Geo",
          weaponType: "Bow",
          region: "Inazuma",
        },
        {
          id: 22,
          name: "Hu Tao",
          rarity: "5 star",
          vision: "Pyro",
          weaponType: "Polearm",
          region: "Liyue",
        },
        {
          id: 23,
          name: "Jean",
          rarity: "5 star",
          vision: "Anemo",
          weaponType: "Sword",
          region: "Mondstadt",
        },
        {
          id: 24,
          name: "Kaedehara Kazuha",
          rarity: "5 star",
          vision: "Anemo",
          weaponType: "Sword",
          region: "Inazuma",
        },
        {
          id: 25,
          name: "Kaeya",
          rarity: "4 star",
          vision: "Cryo",
          weaponType: "Sword",
          region: "Mondstadt",
        },
        {
          id: 26,
          name: "Kaveh",
          rarity: "4 star",
          vision: "Dendro",
          weaponType: "Claymore",
          region: "Sumeru",
        },
        {
          id: 27,
          name: "Keqing",
          rarity: "5 star",
          vision: "Electro",
          weaponType: "Sword",
          region: "Liyue",
        },
        {
          id: 28,
          name: "Klee",
          rarity: "5 star",
          vision: "Pyro",
          weaponType: "Catalyst",
          region: "Mondstadt",
        },
        {
          id: 29,
          name: "Kujou Sara",
          rarity: "4 star",
          vision: "Electro",
          weaponType: "Bow",
          region: "Inazuma",
        },
        {
          id: 30,
          name: "Kuki Shinobu",
          rarity: "4 star",
          vision: "Electro",
          weaponType: "Sword",
          region: "Inazuma",
        },
        {
          id: 31,
          name: "Layla",
          rarity: "4 star",
          vision: "Cryo",
          weaponType: "Sword",
          region: "Sumeru",
        },
        {
          id: 32,
          name: "Lisa",
          rarity: "4 star",
          vision: "Electro",
          weaponType: "Catalyst",
          region: "Mondstadt",
        },
        {
          id: 33,
          name: "Lynette",
          rarity: "4 star",
          vision: "Anemo",
          weaponType: "Sword",
          region: "Fontaine",
        },
        {
          id: 34,
          name: "Lyney",
          rarity: "5 star",
          vision: "Pyro",
          weaponType: "Bow",
          region: "Fontaine",
        },
        {
          id: 35,
          name: "Mika",
          rarity: "4 star",
          vision: "Cryo",
          weaponType: "Polearm",
          region: "Mondstadt",
        },
        {
          id: 36,
          name: "Mona",
          rarity: "5 star",
          vision: "Hydro",
          weaponType: "Catalyst",
          region: "Mondstadt",
        },
        {
          id: 37,
          name: "Nahida",
          rarity: "5 star",
          vision: "Dendro",
          weaponType: "Catalyst",
          region: "Sumeru",
        },
        {
          id: 38,
          name: "Neuvillette",
          rarity: "5 star",
          vision: "Hydro",
          weaponType: "Catalyst",
          region: "Fontaine",
        },
        {
          id: 39,
          name: "Nilou",
          rarity: "5 star",
          vision: "Hydro",
          weaponType: "Sword",
          region: "Sumeru",
        },
        {
          id: 40,
          name: "Ningguang",
          rarity: "4 star",
          vision: "Geo",
          weaponType: "Catalyst",
          region: "Liyue",
        },
        {
          id: 41,
          name: "Noelle",
          rarity: "4 star",
          vision: "Geo",
          weaponType: "Claymore",
          region: "Mondstadt",
        },
        {
          id: 42,
          name: "Qiqi",
          rarity: "5 star",
          vision: "Cryo",
          weaponType: "Sword",
          region: "Liyue",
        },
        {
          id: 43,
          name: "Raiden Shogun",
          rarity: "5 star",
          vision: "Electro",
          weaponType: "Polearm",
          region: "Inazuma",
        },
        {
          id: 44,
          name: "Razor",
          rarity: "4 star",
          vision: "Electro",
          weaponType: "Claymore",
          region: "Mondstadt",
        },
        {
          id: 45,
          name: "Rosaria",
          rarity: "4 star",
          vision: "Cryo",
          weaponType: "Polearm",
          region: "Mondstadt",
        },
        {
          id: 46,
          name: "Sangonomiya Kokomi",
          rarity: "5 star",
          vision: "Hydro",
          weaponType: "Catalyst",
          region: "Inazuma",
        },
        {
          id: 47,
          name: "Sayu",
          rarity: "4 star",
          vision: "Anemo",
          weaponType: "Claymore",
          region: "Inazuma",
        },
        {
          id: 48,
          name: "Shenhe",
          rarity: "5 star",
          vision: "Cryo",
          weaponType: "Polearm",
          region: "Liyue",
        },
        {
          id: 49,
          name: "Shikanoin Heizou",
          rarity: "4 star",
          vision: "Anemo",
          weaponType: "Catalyst",
          region: "Inazuma",
        },
        {
          id: 50,
          name: "Sucrose",
          rarity: "4 star",
          vision: "Anemo",
          weaponType: "Catalyst",
          region: "Mondstadt",
        },
        {
          id: 51,
          name: "Tartaglia",
          rarity: "5 star",
          vision: "Hydro",
          weaponType: "Bow",
          region: "Snezhnaya",
        },
        {
          id: 52,
          name: "Thoma",
          rarity: "4 star",
          vision: "Pyro",
          weaponType: "Polearm",
          region: "Inazuma",
        },
        {
          id: 53,
          name: "Tighnari",
          rarity: "5 star",
          vision: "Dendro",
          weaponType: "Bow",
          region: "Sumeru",
        },
        {
          id: 54,
          name: "Venti",
          rarity: "5 star",
          vision: "Anemo",
          weaponType: "Bow",
          region: "Mondstadt",
        },
        {
          id: 55,
          name: "Wriothesley",
          rarity: "5 star",
          vision: "Cryo",
          weaponType: "Catalyst",
          region: "Fontaine",
        },
        {
          id: 56,
          name: "Xiangling",
          rarity: "4 star",
          vision: "Pyro",
          weaponType: "Polearm",
          region: "Liyue",
        },
        {
          id: 57,
          name: "Xiao",
          rarity: "5 star",
          vision: "Anemo",
          weaponType: "Polearm",
          region: "Liyue",
        },
        {
          id: 58,
          name: "Xingqiu",
          rarity: "4 star",
          vision: "Hydro",
          weaponType: "Sword",
          region: "Liyue",
        },
        {
          id: 59,
          name: "Xinyan",
          rarity: "4 star",
          vision: "Pyro",
          weaponType: "Claymore",
          region: "Liyue",
        },
        {
          id: 60,
          name: "Yae Miko",
          rarity: "5 star",
          vision: "Electro",
          weaponType: "Catalyst",
          region: "Inazuma",
        },
        {
          id: 61,
          name: "Yanfei",
          rarity: "4 star",
          vision: "Pyro",
          weaponType: "Catalyst",
          region: "Liyue",
        },
        {
          id: 62,
          name: "Yaoyao",
          rarity: "4 star",
          vision: "Dendro",
          weaponType: "Polearm",
          region: "Liyue",
        },
        {
          id: 63,
          name: "Yelan",
          rarity: "5 star",
          vision: "Hydro",
          weaponType: "Bow",
          region: "Liyue",
        },
        {
          id: 64,
          name: "Yoimiya",
          rarity: "5 star",
          vision: "Pyro",
          weaponType: "Bow",
          region: "Inazuma",
        },
        {
          id: 65,
          name: "Yun Jin",
          rarity: "4 star",
          vision: "Geo",
          weaponType: "Polearm",
          region: "Liyue",
        },
        {
          id: 66,
          name: "Zhongli",
          rarity: "5 star",
          vision: "Geo",
          weaponType: "Polearm",
          region: "Liyue",
        },
      ],
      sortKey: '',
      sortOrder: 'asc',
    };
  },
  computed: {
    filteredCharacters() {
      const searchTarget = this.searchedWord
        ? this.searchedWord.toLowerCase()
        : "";
        
      const filtered = this.allCharacter.filter((character) => {
        return (
          character.name.toLowerCase().includes(searchTarget) ||
          character.rarity.toLowerCase().includes(searchTarget) ||
          character.vision.toLowerCase().includes(searchTarget) ||
          character.weaponType.toLowerCase().includes(searchTarget) ||
          character.region.toLowerCase().includes(searchTarget)
        );
      });

      // Rendezés
      if (this.sortKey) {
        return filtered.sort((a, b) => {
          const aValue = a[this.sortKey];
          const bValue = b[this.sortKey];
          
          if (this.sortOrder === 'asc') {
            return aValue.localeCompare(bValue)
          } else {
            return bValue.localeCompare(aValue)
          }
          // if (this.sortOrder === 'asc') {
          //   return aValue > bValue ? 1 : -1;
          // } else {
          //   return aValue < bValue ? 1 : -1;
          // }
        });
      }
      return filtered;
    },
  },
  methods: {
    sortTable(key) {
      if (this.sortKey === key) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortOrder = 'asc';
      }
    },
  },
};
</script>

<style>


  .container-fluid2 {
    border-radius: 10px;
    padding: 20px;
    margin: 20px auto;
  }

  table {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9); /* Táblázat átlátszó háttere */
    border-collapse: collapse;
    text-align: left;
    border: 2px solid black; /* Szilárd keret a táblázatnak */
    border-radius: 10px; /* Kerekített sarkok */
    overflow: hidden;
    cursor: pointer;
  }

  th, td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  th {
    color: #fff; /* Fehér szín a fejlécnek */
    background-color: #555; /* Sötétszürke háttér a fejlécnek */
  }

  td {
    color: #555;
  }

  /* Váltakozó háttérszínek a táblázat sorainál */
  tr:nth-child(even) {
    background-color: #f9f9f9; /* Világos szürke a páros sorokhoz */
  }

  tr:nth-child(odd) {
    background-color: #fff; /* Fehér a páratlan sorokhoz */
  }

  tr:hover {
    background-color: #f1f1f1; /* Hover hatás */
  }

  /* Responsív elrendezés mobilra */
  @media (max-width: 768px) {
    table, th, td {
      font-size: 14px;
    }
  }
</style>

