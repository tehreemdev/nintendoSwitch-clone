<template>
  <div class="">
    <section class="md:p-3">
      <article>
        <h2 class="font-bold text-sm">Playable On</h2>
        <div class="mt-1" v-for="option of PlayableOptions">
          <article class="text-[10px]">
            <label class="flex items-center gap-1 cursor-pointer">
              <input
                v-model="input"
                type="checkbox"
                :true-value="option?.trueValue"
                false-value=""
                class="rounded-none"
              />

              {{ option?.label }}
            </label>
          </article>
        </div>
      </article>

      <article>
        <h2 class="font-bold text-sm mt-5">Media Type</h2>
        <div class="mt-1" v-for="option of MediaTypeOptions">
          <article class="text-[10px]">
            <label class="flex items-center gap-1 cursor-pointer">
              <input
                v-model="input"
                type="checkbox"
                :true-value="option?.trueValue"
                false-value=""
              />

              {{ option?.label }}
            </label>
          </article>
        </div>
      </article>

      <article>
        <h2 class="font-bold text-sm mt-5">Availability</h2>
        <div class="mt-1" v-for="option of AvailabilityOptions">
          <article class="text-[10px]">
            <label class="flex items-center gap-1 cursor-pointer">
              <input
                v-model="input"
                type="checkbox"
                :true-value="option?.trueValue"
                false-value=""
              />

              {{ option?.label }}
            </label>
          </article>
        </div>
      </article>

      <article>
        <h2 class="font-bold text-sm mt-5">Discounted (Nintendo Switch)</h2>
        <div class="mt-1" v-for="option of DiscountedNintendoSwitchOptions">
          <article class="text-[10px]">
            <label class="flex items-center gap-1 cursor-pointer">
              <input
                v-model="input"
                type="checkbox"
                :true-value="option?.trueValue"
                false-value=""
              />

              {{ option?.label }}
            </label>
          </article>
        </div>
      </article>

      <article>
        <h2 class="font-bold text-sm mt-5">Pricing (Nintendo Switch)</h2>
        <div class="mt-2" v-for="option of PricingNintendoSwitch">
          <article class="text-[10px]">
            <label class="flex items-center gap-1 cursor-pointer">
              <input
                v-model="input"
                type="checkbox"
                :true-value="option?.trueValue"
                false-value=""
              />

              {{ option?.label }}
            </label>
          </article>
        </div>
      </article>

      <article>
        <h2 class="font-bold text-sm mt-5">Demos and DLC</h2>
        <div class="mt-1" v-for="option of DemosandDLCOption">
          <article class="text-[10px]">
            <label class="flex items-center gap-1 cursor-pointer">
              <input
                v-model="input"
                type="checkbox"
                :true-value="option?.trueValue"
                false-value=""
              />

              {{ option?.label }}
            </label>
          </article>
        </div>
      </article>
      <article>
        <h2 class="font-bold text-sm mt-5">Originally for</h2>
        <div class="mt-1" v-for="option of OriginallyforOption">
          <article class="text-[10px]">
            <label class="flex items-center gap-1 cursor-pointer">
              <input
                v-model="input"
                type="checkbox"
                :true-value="option?.trueValue"
                false-value=""
              />

              {{ option?.label }}
            </label>
          </article>
        </div>
      </article>
      <article>
        <h2 class="font-bold text-sm mt-5">Genre</h2>
        <div class="mt-1" v-for="option of GenreOption">
          <article class="text-[10px]">
            <label class="flex items-center gap-1 cursor-pointer">
              <input
                v-model="input"
                type="checkbox"
                :true-value="option?.trueValue"
                false-value=""
              />

              {{ option?.label }}
            </label>
          </article>
        </div>
      </article>
      <article>
        <h2 class="font-bold text-sm mt-5">Series</h2>
        <div class="mt-1" v-for="option of SeriesOption">
          <article class="text-[10px]">
            <label class="flex items-center gap-1 cursor-pointer">
              <input
                v-model="input"
                type="checkbox"
                :true-value="option?.trueValue"
                false-value=""
              />

              {{ option?.label }}
            </label>
          </article>
        </div>
      </article>

      <article>
        <h2 class="font-bold text-sm mt-5">Player age</h2>
        <div class="mt-1" v-for="option of PlayerageOption">
          <article class="text-[10px]">
            <label class="flex items-center gap-1 cursor-pointer">
              <input
                v-model="input"
                type="checkbox"
                :true-value="option?.trueValue"
                false-value=""
              />

              {{ option?.label }}
            </label>
          </article>
        </div>
      </article>

      <article>
        <h2 class="font-bold text-sm mt-5">Features</h2>
        <div class="mt-1" v-for="option of FeaturesOption">
          <article class="text-[10px]">
            <label class="flex items-center gap-1 cursor-pointer">
              <input
                v-model="input"
                type="checkbox"
                :true-value="option?.trueValue"
                false-value=""
              />

              {{ option?.label }}
            </label>
          </article>
        </div>
      </article>

      <article>
        <h2 class="font-bold text-sm mt-5">Multiplayer</h2>
        <div class="mt-1" v-for="option of MultiplayerOption">
          <article class="text-[10px]">
            <label class="flex items-center gap-1 cursor-pointer">
              <input
                v-model="input"
                type="checkbox"
                :true-value="option?.trueValue"
                false-value=""
              />

              {{ option?.label }}
            </label>
          </article>
        </div>
      </article>

      <article>
        <h2 class="font-bold text-sm mt-5">Languages</h2>
        <div class="mt-1" v-for="option of LanguagesOption">
          <article class="text-[10px]">
            <label class="flex items-center gap-1 cursor-pointer">
              <input
                v-model="input"
                type="checkbox"
                :true-value="option?.trueValue"
                false-value=""
              />

              {{ option?.label }}
            </label>
          </article>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
const props = defineProps({
  option: { type: Object, default: null }
})

const emits = defineEmits(['updated:modelValue'])

const input = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('updated:modelValue', val)
  }
})

const PlayableOptions = [
  { label: 'Nintendo Switch', value: 'switch' },
  { label: 'New Nintendo 2DS XL', value: '2dsxl' },
  { label: 'New Nintendo 3DS', value: '3ds' },
  { label: 'New Nintendo 3DS XL', value: '3dsxl' },
  { label: 'Nintendo 2DS', value: '2ds' },
  { label: 'Nintendo 3DS', value: '3ds' },
  { label: 'Nintendo 3DS XL', value: '3dsxl' },
  { label: 'Smart device', value: 'smartdevice' },
  { label: 'Wii U', value: 'wiiu' },
  { label: 'Wii', value: 'wii' },
  { label: 'Nintendo DSi', value: 'dsi' },
  { label: 'Nintendo DS', value: 'ds' },
  { label: 'Other systems', value: 'others' }
]

const MediaTypeOptions = [
  { label: 'Retail Version', value: 'retailversion' },
  { label: 'Download Only ', value: 'downloadOnly' }
]

const AvailabilityOptions = [
  { label: 'Available now', value: 'availableNow' },
  { label: 'Coming soon ', value: 'comingSoon' },
  { label: 'Recently Released', value: 'recentlyreleased' }
]
const DiscountedNintendoSwitchOptions = [{ label: 'sale on', value: 'saleon' }]

const PricingNintendoSwitch = [
  { label: '£0.00' },
  { label: '£0.001 - £2.49' },
  { label: '£2.50 - £4.99' },
  { label: '£5.00 - £7.49' },
  { label: '£7.50 - £9.99' },
  { label: '£10.00 - £14.99' },
  { label: '£15.00 - £19.99' },
  { label: '£20.00 - £29.99' },
  { label: '£30.00 - £49.99' },
  { label: '£50 +' }
]

const DemosandDLCOption = [{ label: 'Demos available' }, { label: 'DLC available' }]
const OriginallyforOption = [
  { label: 'Game boy' },
  { label: 'Game boy Advance' },
  { label: 'Game boy Color' },
  { label: 'NES' },
  { label: 'New Nintendo 3DS' },
  { label: 'Nintendo 64' },
  { label: 'Nintendo 3DS' },
  { label: 'Nintendo DS' },
  { label: 'Nintendo DSi' },
  { label: 'Nintendo Switch ' },
  { label: 'Nintendo GameCube' },
  { label: 'Pokemon mini' },
  { label: 'Smart Device' },
  { label: 'Super Nintendo' },
  { label: 'Wii U' },
  { label: 'Wii' },
  { label: 'Other systems' }
]
const GenreOption = [
  { label: 'Action' },
  { label: 'Adventure' },
  { label: 'Arcade' },
  { label: 'Fighting' },
  { label: 'Health & Fitness' },
  { label: 'Music' },
  { label: 'Party' },
  { label: 'Plateformer' },
  { label: 'Puzzle' },
  { label: 'Racing' },
  { label: 'RPG' },
  { label: 'Shooter' },
  { label: 'Simulation' },
  { label: 'Sports' }
]
const SeriesOption = [
  { label: 'Animal Crossing' },
  { label: 'Final Fantasy' },
  { label: 'Kirby' },
  { label: 'layton Series' },
  { label: 'Pokemon' },
  { label: 'Sonic the hedgehog' },
  { label: 'Super Mario' },
  { label: 'The Land of Zelda' },
  { label: 'Yoshi' }
]
const PlayerageOption = [
  { label: 'Up till 6' },
  { label: 'Up till 11' },
  { label: 'Up till 15' },
  { label: 'Up till 17' }
]
const FeaturesOption = [
  { label: 'amiibo compatibility' },
  { label: 'Indie World' },
  { label: 'Internet' },
  { label: 'Nintendo Labo compatibility' },
  { label: 'Save Data Cloud' },
  { label: 'Paid online membership service' }
]
const MultiplayerOption = [
  { label: 'At least 2 players' },
  { label: 'At least 3 players' },
  { label: 'At least 4 players' },
  { label: 'More than 8 players ' },
  { label: 'Co-op play' },
  { label: 'Local Multiplayer' }
]
const LanguagesOption = [
  { label: 'English' },
  { label: 'Greman' },
  { label: 'French' },
  { label: 'Spanish' },
  { label: 'Italian' },
  { label: 'Dutch' },
  { label: 'Portuguese' },
  { label: 'Russian' },
  { label: 'Japanese' }
]

// const selectedPlayableOn = ref(PlayableOptions.map(() => false))
// const selectedMediaType = ref(MediaTypeOptions.map(() => false))
// const selectedAvailability = ref(AvailabilityOptions.map(() => false))
// const selectedDiscountedNintendoSwitch = ref(DiscountedNintendoSwitchOptions.map(() => false))
</script>

<style></style>
