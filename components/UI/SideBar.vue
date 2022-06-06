<template>
  <v-card flat id="navdrawer-wrapper">
    <div style="text-align: center">
      <img
        src="~/assets/icons/AsenaDevLogo.svg"
        alt="Asena Dev Logo"
        style="width: 124px; margin-auto"
      />
    </div>
    <v-list dense nav>
      <v-list-item dark nuxt exact>
        <v-list-item-icon
          class="rounded-sm px-2"
          style="background: rgba(45, 108, 233, 0.1)"
        >
          <v-icon color="primary">$adDashboard</v-icon>
        </v-list-item-icon>

        <v-list-item-content class="primary rounded-sm">
          <v-list-item-title>پیشخوان</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" nuxt exact>
        <v-list-item-icon
          class="rounded-sm px-2"
          style="background: rgba(36, 217, 193, 0.1)"
        >
          <v-icon color="secondary" v-text="item.icon" />
        </v-list-item-icon>

        <v-list-item-content
          class="rounded-sm"
          style="background: rgba(45, 108, 233, 0.1)"
        >
          <v-list-item-title>
            {{ item.title }}
            <svg
              width="13"
              height="7"
              viewBox="0 0 13 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.232 0.273971C0.335278 0.162955 0.466101 0.0812556 0.611178 0.0371704C0.756255 -0.00691485 0.910417 -0.0118141 1.058 0.0229721C1.23097 0.0659767 1.38768 0.158402 1.509 0.288971L6.145 4.92597L10.795 0.27697C10.9535 0.109867 11.1709 0.0112075 11.401 0.00197597C11.5351 -0.00189299 11.6682 0.0256638 11.7898 0.0824432C11.9113 0.139223 12.0179 0.223646 12.101 0.328972C12.2071 0.467033 12.2717 0.632517 12.287 0.805977V0.878975C12.2812 1.00041 12.252 1.11959 12.201 1.22997C12.1303 1.36224 12.0365 1.48078 11.924 1.57997L6.776 6.72697C6.69482 6.81349 6.59677 6.88245 6.4879 6.9296C6.37902 6.97674 6.26164 7.00106 6.143 7.00106C6.02436 7.00106 5.90698 6.97674 5.7981 6.9296C5.68923 6.88245 5.59118 6.81349 5.51 6.72697L0.279 1.49397C0.110155 1.33222 0.0102175 1.11157 0 0.877975L0 0.825973C0.0112591 0.620701 0.0932344 0.425654 0.232 0.273971Z"
                fill="#1B2024"
              />
            </svg>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "مقالات",
          icon: "$adArticle",
        },
        {
          title: "برگه‌ها",
          icon: "$adPages",
        },
        {
          title: "کاربران",
          icon: "$adUsers",
        },
        {
          title: "تنظیمات پوسته",
          icon: "$adTheme",
        },
        {
          title: "مدیریت فایل",
          icon: "$adFileManager",
        },
        {
          title: "پشتیبانی",
          icon: "$adSupport",
        },
        {
          title: "مدیریت ایمیل‌ها",
          icon: "$adEmail",
        },
        {
          title: "مدیریت فرم‌ها",
          icon: "$adForms",
        },
        {
          title: "تنظیمات سایت",
          icon: "$adSettings",
        },
        {
          title: "سلامت وبسایت",
          icon: "$adSiteHealth",
        },
      ],
    };
  },
};
</script>

<style scoped>
#navdrawer-wrapper {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 280px;
  height: 1000px;
  padding: 28px;
  border: 2px solid rgba(76, 84, 90, 0.1);
  border-radius: 22px;
}
</style>
