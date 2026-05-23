<template>
  <div style="background: #050B16; border-radius: 16px; padding: 28px 22px; font-family: var(--font-sans);">
  <div class="pricing-grid">

    <!-- FOUNDATION -->
    <div style="background: #0E1B2E; border-radius: 16px; padding: 26px 24px; color: white; border: 0.5px solid rgba(255,255,255,0.06);">
      <div style="display: inline-block; background: rgba(255,255,255,0.08); color: #C0CAD8; padding: 5px 13px; border-radius: 20px; font-size: 11px; font-weight: 500; margin-bottom: 16px; letter-spacing: 0.5px;">
        МЕКТЕП ПӘНДЕРІ · АҒЫЛШЫН
      </div>
      <div style="font-size: 28px; font-weight: 800; margin: 0 0 4px; color: white; letter-spacing: -0.5px;">FOUNDATION</div>
      <div style="font-size: 12px; color: #8B96A8; margin: 0 0 22px;">1–11 сынып пәндері мен жалпы ағылшын тілі</div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 22px;">
        <div style="border-right: 0.5px solid rgba(255,255,255,0.08); padding-right: 18px;">
          <div style="font-size: 10px; color: #6E7A8E; margin-bottom: 6px; letter-spacing: 1px; font-weight: 600;">ТОПТЫҚ</div>
          <div style="font-size: 11px; color: #8B96A8; margin-bottom: 12px;">2–5 оқушы · аптасына 4 сабақ</div>
          <div style="font-size: 26px; font-weight: 800; color: white; line-height: 1;">
            20 000 <span style="font-size: 11px; font-weight: 400; color: #6E7A8E;">₸/ай</span>
          </div>
          <div style="font-size: 10px; color: #6E7A8E; margin-top: 6px;">немесе 1 250 ₸/сабақ</div>
        </div>
        <div>
          <div style="font-size: 10px; color: #6E7A8E; margin-bottom: 6px; letter-spacing: 1px; font-weight: 600;">ЖЕКЕ</div>
          <div style="font-size: 11px; color: #8B96A8; margin-bottom: 12px;">1:1 формат · аптасына 3 сабақ</div>
          <div style="font-size: 26px; font-weight: 800; color: white; line-height: 1;">
            3 000–5 000 <span style="font-size: 11px; font-weight: 400; color: #6E7A8E;">₸/сабақ</span>
          </div>
          <div style="font-size: 10px; color: #6E7A8E; margin-top: 6px;">ұстаздың тәжірибесіне байланысты</div>
        </div>
      </div>

      <div style="border-top: 0.5px solid rgba(255,255,255,0.06); padding-top: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 18px; font-size: 12px; color: #C0CAD8;">
        <div v-for="feature in foundationFeatures" :key="feature">
          <span style="color: #E89077; margin-right: 6px; font-weight: 700;">✓</span>{{ feature }}
        </div>
      </div>
    </div>

    <!-- UBT PRO -->
    <div style="background: #0E1B2E; border-radius: 16px; padding: 26px 24px; color: white; position: relative; border: 1.5px solid #B8472D;">
      <div style="position: absolute; top: -12px; right: 24px; background: #B8472D; color: white; padding: 5px 14px; border-radius: 16px; font-size: 11px; font-weight: 700; letter-spacing: 0.5px;">
        ★ ЕҢ ТАНЫМАЛ
      </div>
      <div style="display: inline-block; background: rgba(184,71,45,0.18); color: #E89077; padding: 5px 13px; border-radius: 20px; font-size: 11px; font-weight: 500; margin-bottom: 16px; letter-spacing: 0.5px;">
        ҰБТ ДАЙЫНДЫҒЫ
      </div>
      <div style="font-size: 28px; font-weight: 800; margin: 0 0 4px; color: white; letter-spacing: -0.5px;">UBT PRO</div>
      <div style="font-size: 12px; color: #8B96A8; margin: 0 0 22px;">Барлық таңдау пәндері бойынша терең дайындық</div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 22px;">
        <div style="border-right: 0.5px solid rgba(255,255,255,0.08); padding-right: 18px;">
          <div style="font-size: 10px; color: #6E7A8E; margin-bottom: 6px; letter-spacing: 1px; font-weight: 600;">ТОПТЫҚ</div>
          <div style="font-size: 11px; color: #8B96A8; margin-bottom: 12px;">2–5 оқушы · аптасына 4 сабақ</div>
          <div style="font-size: 26px; font-weight: 800; color: white; line-height: 1;">
            22 000 <span style="font-size: 11px; font-weight: 400; color: #6E7A8E;">₸/ай</span>
          </div>
          <div style="font-size: 10px; color: #6E7A8E; margin-top: 6px;">немесе 1 375 ₸/сабақ</div>
        </div>
        <div>
          <div style="font-size: 10px; color: #6E7A8E; margin-bottom: 6px; letter-spacing: 1px; font-weight: 600;">ЖЕКЕ</div>
          <div style="font-size: 11px; color: #8B96A8; margin-bottom: 12px;">1:1 формат · аптасына 3 сабақ</div>
          <div style="font-size: 26px; font-weight: 800; color: white; line-height: 1;">
            3 000–5 000 <span style="font-size: 11px; font-weight: 400; color: #6E7A8E;">₸/сабақ</span>
          </div>
          <div style="font-size: 10px; color: #6E7A8E; margin-top: 6px;">ұстаздың тәжірибесіне байланысты</div>
        </div>
      </div>

      <div style="border-top: 0.5px solid rgba(255,255,255,0.06); padding-top: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 18px; font-size: 12px; color: #C0CAD8;">
        <div v-for="feature in ubtProFeatures" :key="feature">
          <span style="color: #E89077; margin-right: 6px; font-weight: 700;">✓</span>{{ feature }}
        </div>
      </div>
    </div>

    <!-- INTERNATIONAL -->
    <div style="background: #0E1B2E; border-radius: 16px; padding: 26px 24px; color: white; border: 0.5px solid rgba(255,255,255,0.06);">
      <div style="display: inline-block; background: rgba(255,255,255,0.08); color: #C0CAD8; padding: 5px 13px; border-radius: 20px; font-size: 11px; font-weight: 500; margin-bottom: 16px; letter-spacing: 0.5px;">
        SAT · IELTS
      </div>
      <div style="font-size: 28px; font-weight: 800; margin: 0 0 4px; color: white; letter-spacing: -0.5px;">INTERNATIONAL</div>
      <div style="font-size: 12px; color: #8B96A8; margin: 0 0 22px;">Халықаралық емтихандарға кәсіби дайындық</div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 22px;">
        <div style="border-right: 0.5px solid rgba(255,255,255,0.08); padding-right: 18px;">
          <div style="font-size: 10px; color: #6E7A8E; margin-bottom: 6px; letter-spacing: 1px; font-weight: 600;">ТОПТЫҚ</div>
          <div style="font-size: 11px; color: #8B96A8; margin-bottom: 12px;">2–5 оқушы · аптасына 4 сабақ</div>
          <div style="font-size: 26px; font-weight: 800; color: white; line-height: 1;">
            30 000 <span style="font-size: 11px; font-weight: 400; color: #6E7A8E;">₸/ай</span>
          </div>
          <div style="font-size: 10px; color: #6E7A8E; margin-top: 6px;">немесе 1 875 ₸/сабақ</div>
        </div>
        <div>
          <div style="font-size: 10px; color: #6E7A8E; margin-bottom: 6px; letter-spacing: 1px; font-weight: 600;">ЖЕКЕ</div>
          <div style="font-size: 11px; color: #8B96A8; margin-bottom: 12px;">1:1 формат · аптасына 3 сабақ</div>
          <div style="font-size: 26px; font-weight: 800; color: white; line-height: 1;">
            3 000–5 000 <span style="font-size: 11px; font-weight: 400; color: #6E7A8E;">₸/сабақ</span>
          </div>
          <div style="font-size: 10px; color: #6E7A8E; margin-top: 6px;">ұстаздың тәжірибесіне байланысты</div>
        </div>
      </div>

      <div style="border-top: 0.5px solid rgba(255,255,255,0.06); padding-top: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 18px; font-size: 12px; color: #C0CAD8;">
        <div v-for="feature in internationalFeatures" :key="feature">
          <span style="color: #E89077; margin-right: 6px; font-weight: 700;">✓</span>{{ feature }}
        </div>
      </div>
    </div>

  </div>

  <!-- Footer note -->
  <div style="text-align: center; color: #8B96A8; font-size: 12px; margin-top: 18px; padding: 12px 0 4px;">
      🎁 Барлық пакеттерде <span style="color: white; font-weight: 600;">алғашқы сабақ — тегін</span> · Алдын ала төлеу шарт емес
    </div>

  </div>
</template>

<style scoped>
.pricing-grid {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

@media (min-width: 1024px) {
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    align-items: start;
  }
}
</style>

<script setup>
const foundationFeatures = [
  'Жеке оқу жоспары',
  'НУ ұстаздары',
  'Барлық материалдар онлайн',
  'Апта сайынғы тест',
  'Видео жазбалар',
  'Үй тапсырмасы тексеру',
]

const ubtProFeatures = [
  'Жеке оқу жоспары',
  'НУ ұстаздары — ҰБТ 130+',
  'Апта сайын Mock-ҰБТ',
  'Тест нәтиже талдауы',
  'Видео жазбалар',
  'Ата-анаға ай есебі',
]

const internationalFeatures = [
  'Жеке оқу жоспары',
  'IELTS 7.5+ / SAT 1400+ ұстаздар',
  'Mock-емтихан апта сайын',
  'Эссе және Speaking тексеру',
  'Видео жазбалар',
  'Ата-анаға ай есебі',
]
</script>