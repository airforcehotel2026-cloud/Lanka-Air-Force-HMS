import { defineStore } from 'pinia'
import { useAuditStore } from './auditStore'
import { useAuthStore } from './authStore'

export const useMenuStore = defineStore('menus', {
  state: () => ({
    menus: [
      {
        id: 'bbq-outdoor',
        name: 'BBQ Menu - Outdoor',
        venue: 'Outdoor',
        kitchenCost: 2000,
        fbStatus: 'PUBLISHED',
        gasCharge: 200,
        officeCharge: 500,
        profitMargin: 1300,
        basePrice: 4000,
        minPax: 50,
        template: `WELCOME DRINK (Select One):
- Orange / Mixed Fruit / Strawberry & Guava / Black Currant
[Selected: ]

SOUP WITH BREAD ROLLS & BUTTER (Select One):
- Cream of Vegetable / Cream of Chicken & Veg / Cream of Mushroom
[Selected: ]

SALAD:
- Coleslaw salad & Green Salad

BBQ:
1. Chicken Drumstick
2. Pork
3. Fish
4. Chicken Brokwast Sausages
5. Bake Potato Wages
6. Pineapple

DESSERTS:
1. Ice Cream
2. Jelly & Custard`,
      },
      {
        id: 'regular-outdoor',
        name: 'Regular Menu - Outdoor',
        venue: 'Outdoor',
        kitchenCost: 1800,
        fbStatus: 'PUBLISHED',
        gasCharge: 180,
        officeCharge: 500,
        profitMargin: 1020,
        basePrice: 3500,
        minPax: 50,
        template: `WELCOME DRINK (Select One):
- Orange / Mixed Fruit / Strawberry & Guava / Black Currant
[Selected: ]

RICE (Select One):
- Veg Fried Rice / Tempered Yellow Rice / Egg & Veg Rice / Free Plain Rice
[Selected: ]

CHICKEN (Select One):
- Baked BBQ Chicken / Chilly Chicken with Mushroom / Chicken Curry
[Selected: ]

FISH (Select One):
- Fish Curry / Fish Stew / Fish Batter Fried (Chilly Mayo)
[Selected: ]

PORK (Select One):
- Pork Black Curry / Sri Lankan style Pork Stew
[Selected: ]

VEGETABLES (Select One):
- Veg Chop Suey / Wok Fried Veg / Mix Veg Curry
[Selected: ]

POTATOES (Select One):
- Potato Tempered / Lyonnaise Potato
[Selected: ]

DHAL (Select One):
- Dhal Curry / Dhal Tempered
[Selected: ]

SALADS:
1. Onion, Capsicum & Tomato Salad
2. Coleslaw Salad

CONDIMENTS:
1. Chili Paste
2. Papadum
3. Fried Dry Chili

DESSERTS (Select One):
- Cream Caramel / Fresh Fruits Salad / Watalappan
[Selected: ]
- AND Ice Cream
- AND Jelly & Custard`,
      },
      {
        id: 'corporate-menu',
        name: 'Corporate Menu',
        venue: 'Any',
        basePrice: 4200,
        minPax: 150, // Special rules apply in component: 200 indoor / 150 outdoor
        template: `WELCOME DRINK (Select One):
- Orange / Mixed Fruit / Strawberry & Guava / Black Currant
[Selected: ]

SALADS (Select Three):
- Onion, Capsicum & Tomato Salad / Coleslaw Salad / Egg Mayonnaise / Coleslaw Hawaiian / Brinjal Salad / Russian Salad with Smoke Chicken
[Selected: ]

RICE (Select One):
- Veg Fried Rice / Tempered Yellow Rice (Cashew Sultana & fried Onion) / Egg & Corn Rice / Egg & Veg Rice
- AND Plain Rice Free
[Selected: ]

NOODLES OR PASTA (Select One):
- Egg & Veg fried Noodles / Chinese Chili Noodles / Stir fried Chili noodles / Spaghetti Napolitano
[Selected: ]

CHICKEN (Select One):
- Baked BBQ Chicken / Chicken Curry / Chili Chicken with Grave
[Selected: ]

FISH (Select One):
- Fish Curry / Fish Batter fried (Chili Mayo) / Fish Stew
[Selected: ]

PORK (Select One):
- Pork Black Curry / Pork Stew (SL Style) / Slice Pork Braised in BBQ Sauce
[Selected: ]

VEGETABLES (Select One):
- Veg Chop Suey / Wok Fried Veg / Veg Mix Curry
[Selected: ]

POTATOES (Select One):
- Potato Tempered / Lemon, garlic & chilly Potatoes / Lyonnaise Potatoes
[Selected: ]

CURRIES (Select One of each):
1. Dhal Curry OR Dhal Tempered
2. Brinjal Moju OR Brinjal Pahie
[Selected: ]

CONDIMENTS:
1. Chili Paste
2. Papadam
3. Fried Dry chili

DESSERT:
1. Fresh Cut Fruits or fresh fruit Salad
2. Cream Caramel or Watalappan
3. Assorted ice cream
4. Jelly & Custard
[Selected: ]`,
      },
      {
        id: 'special-garden',
        name: 'Special Garden Menu',
        venue: 'Garden',
        basePrice: 4500,
        minPax: 100,
        template: `WELCOME DRINK (Select One):
- Strawberry & Guava / Apple / Orange / Mixed Fruit / Black Currant / Soursop / Mandarin
[Selected: ]

SOUP WITH BREAD ROLL & BUTTER (Select One):
- Cream of Veg Soup / Cream of Mushroom Soup / Cream of Chicken & Veg Soup / Egg & Sweetcorn soup / Chicken Sweet cone & Egg dropped soup
[Selected: ]

SALAD (Select One):
1. Creamy coleslaw
2. Green Salad
[Selected: ]

DINNER (ACTION):
1. Chicken Koththu OR Egg Koththu
2. Chicken Rice OR Egg Rice
3. Egg Hoppers OR Plain Hoppers
4. Chicken Small pieces Curry
5. Fish Gravy
6. Katta Sambol
7. Seeni Sambol
8. Chili paste
9. Tomato sauce
[Selected: ]

DESSERTS:
1. Assorted ice cream
2. Watalappan
3. Jelly with Custard
[Selected: ]

BITE (100 pax only):
1. Chicken Devilled - 12.00 Kg
2. Pork Pepper Devilled - 10.00 Kg
3. Boiled Vegetable - 08.00 Kg
4. Chicken Bockwurst - 08.00 Kg
5. Fish Cutlet - 200 Ea`,
      },
      {
        id: 'diamond-eagle',
        name: 'Diamond Eagle Menu',
        venue: 'Any',
        basePrice: 0,
        minPax: 0,
        template: `WELCOME DRINK (SELECT ONE):
- Fresh Watermelon / Fresh Ambarella / Fresh Mixfruit / Lemon & Passion Mint Juice / Lime & Soda
[Selected: ]

SALADS (SELECT EIGHT):
- Caesar Salad / Caesar Salad with Chicken / Cream Coleslaw / Coleslaw Hawaiian / Assorted Cold Cuts
- Russian Salad (Smoked Chicken) / Egg Mayo / Seafood & Veg or Pasta / Chicken & Veg or Pasta
- Stuffed Eggs / German Potato / Raita / Thai Papaya / Garlic Prawns with Citrus / Chicken Olive & Pineapple
- Spicy Tuna / Thai Beef / Grill Corn & Zukini
* FREE: Decorated with ice carvings
[Selected: ]

SOUPS WITH BREAD ROLLS & BUTTER (SELECT TWO):
- Cream of Veg / Minestrone / Veg Broth / Sweet Corn & Egg Drop / Chicken Broth / Cream of Mushroom Carrot
[Selected: ]

DESSERTS (SELECT SEVEN):
- Fresh Fruits Salad / Fresh Cut Fruits / Bread & Butter Pudding / Pineapple Pudding / Butter Scotch
- Dates Pudding / Hot Chocolate Pudding / Assorted Ice Cream / Caramel & Apple Crumble / Curd & Trickle
- Watalappan / Cream Pineapple / Passion Curd Cake / Fruits in Jelly / Queen of Puddings
- Assorted Mousse / Mousse Cake / Any Gateaux / Choc Biscuit Pudding / Choc Profiteroles
- Fruit Triffle / Broken Glass Jelly / Coconut Jelly with Seasonal Fruits
[Selected: ]`,
      },
      {
        id: 'platinum-eagle',
        name: 'Platinum Eagle Menu',
        venue: 'Any',
        basePrice: 0,
        minPax: 0,
        template: `WELCOME DRINK (SELECT ONE):
- Apple / Orange / Mixed Fruit / Strawberry & Guava / Black Currant / Soursop / Mandarin
[Selected: ]

SALADS (SELECT SEVEN):
- Garlic Prawns with Citrus / Chicken Olive & Pineapple / Caesar / Caesar with Chicken / Cream Coleslaw
- Coleslaw Hawaiian / California Coleslaws / Raita / Grill Corn & Zukini / Nicoise / Mix Veg in Tomato Cup
- Waldorf / Seafood & Veg or Pasta / Beet & Orange / Grilled Apple & Pineapple / German Potato
- Thai Papaya / Thai Beef / Boiled Chick Pea & Ham
[Selected: ]

SOUPS WITH BREAD ROLLS & BUTTER (SELECT TWO):
- Cream of Veg / Minestrone / Veg Broth / Sweet Corn & Egg Drop / Chicken Broth / Cream of Mushroom
[Selected: ]

VEGETABLES (SELECT THREE):
- Cashew White Curry / Mixed Veg Curry / Mixed Grilled Veg with Sesame / Beans & Pineapple Curry
- Veg Chopsuey / Stuffed Capsicum / Thai Veg with Tofu / Chinese Green Beans & Garlic Sauce
- Mushroom Tempered with Onion & Capsicum / Lyonnaise Potatoes / Potato Tempered / Brinjal Moju
- Lemon Garlic & Chilli Potato / Veg Lasangna
* FREE: Dhal Tempered or Dhal Curry
[Selected: ]

DESSERTS (SELECT SIX):
- Fresh Fruits Salad / Fresh Cut Fruits / Fruit Triffle / Bread & Butter Pudding / Queen of Puddings
- Hot Chocolate Pudding / Pineapple & Apple Crumble / Pineapple Pudding / Assorted Mousse / Mousse Cake
- Curd & Trickle / Watalappan...
[Selected: ]`,
      },
      {
        id: 'golden-eagle',
        name: 'Golden Eagle Menu',
        venue: 'Any',
        basePrice: 0,
        minPax: 0,
        template: `WELCOME DRINK (SELECT ONE):
- Apple / Orange / Mixed Fruit / Strawberry & Guava / Black Currant / Soursop / Mandarin
[Selected: ]

SALADS (SELECT SIX):
- Garlic Prawns with Citrus / Chicken Olive & Pineapple / Caesar / Cream Coleslaw / Spicy Tuna / Coleslaw Hawaiian
- Thai Beef / Boiled Chick Pea & Hum / Raita / Tomato Cucumber & Onion / Russian (Smoked Chicken)
- Egg Mayo / Stuffed Eggs / Seafood & Veg or Pasta / Chicken & Veg or Pasta / Nicoise
- Mix Veg in Tomato Cup / Waldorf / German Potato / Thai Papaya / Beet & Orange
[Selected: ]

SOUPS WITH BREAD ROLLS & BUTTER (SELECT ONE):
- Cream of Veg / Minestrone / Veg Broth / Sweet Corn & Egg...
[Selected: ]

VEGETABLES (SELECT THREE):
- Cashew White Curry / Mixed Veg Curry / Beans & Pineapple / Veg Chopsuey / Stuffed Capsicum
- Lyonnaise Potatoes / Potato Tempered / Lemon Garlic & Chilli Potato
* FREE: Dhal Tempered or Dhal Curry
[Selected: ]

ACTION CORNER (SELECT ONE):
- Batter Fried Mushrooms / Fish Cutlets / Chicken Nuggets (Rs. 250 Net/Pax)
- Mutton Tikka / Mutton Khroma Masala (Rs. 350 Net/Pax)
[Selected: ]

CONDIMENTS:
1. Chilli Paste
2. Mango Chutney
3. Prawn Crackers & Papadam
4. Country Pickle
5. Fried Chilli Moru

DESSERTS (SELECT SIX):
- Assorted Mousse / Mousse Cake / Choc Profiteroll / Any Gateaux ...
[Selected: ]`,
      },
      {
        id: 'silver-eagle',
        name: 'Silver Eagle Menu',
        venue: 'Any',
        basePrice: 0,
        minPax: 0,
        template: `WELCOME DRINK (SELECT ONE):
- Apple / Orange / Mixed Fruit / Strawberry & Guava / Black Currant / Soursop / Mandarin
[Selected: ]

SOUPS WITH BREAD ROLLS & BUTTER (SELECT ONE):
- Cream of Veg / Roasted Pumpkin with Garlic Flakes / Cream of Mushroom / Ginger & Carrot
- Cream of Chicken & Veg / Veg Broth / Roasted Potatoes & Garlic / Egg & Sweetcorn
[Selected: ]

SALADS (SELECT FIVE):
- Caesar / Creamy Coleslaw with Raisins / Coleslaw Hawaiian / Garlic Seafood with Citrus
- Egg Mayo / Beet & Orange / Spicy Tuna / Grilled Apple & Pineapple / Thai Beef
- Chicken & Veg or Pasta / Herbs Marinated Italian Pasta / Russian (Smoked Chicken)
- Chicken & Veg or Pasta / Mix Veg in Tomato Cup / Onion Tomato Cucumber
[Selected: ]

FISH (SELECT ONE):
- Grilled Fish with BBQ / Thai Fish Red Curry / Baked Fish Ambulthiyal on Banana Leaf
- Fish Stew (SL Style) / Fish Batter Fried (Chili Mayo) / Mixed Seafood Stew / Spicy Fish Red Curry
- Chilli Fish with Gravy
[Selected: ]

VEGETABLES (SELECT THREE):
- Cashew & Carrot / Green Peas & Potato / Mixed Veg / Brinjal Pahie / Mixed Grilled Veg with Sesame
- Veg Chopsey / Potato with Chili & Onion / Lemon Garlic & Chili Potatoes / Thai Veg with Tofu
- Chinese Green Beans with Garlic Sauce / Lyonnais Potatoes OR Brinjal Moju
- Mushroom Tempered & Onion / Fried Bittergaurd with Capcicum & Onion
* AND Dhal Curry or Tempered
[Selected: ]

ADD-ONS (BUFFET ACTION):
- Fish Cutlet OR Mushroom (Rs 150 Net/Pax)

CONDIMENTS:
1. Mango Chutney
2. Papadam`,
      },
      {
        id: 'eagle-menu',
        name: 'Eagle Menu',
        venue: 'Any',
        basePrice: 0,
        minPax: 0,
        template: `WELCOME DRINK (SELECT ONE):
- Apple / Orange / Mixed Fruit / Strawberry & Guava / Black Currant / Soursop / Mandarin
[Selected: ]

SOUPS WITH BREAD ROLLS & BUTTER (SELECT ONE):
- Cream of Veg / Roasted Pumpkin with Garlic Flakes / Cream of Mushroom / Ginger & Carrot
- Cream of Chicken & Veg / Veg Broth / Roasted Potatoes & Garlic
[Selected: ]

APPETIZERS & SALADS (SELECT FIVE):
- Creamy Coleslaw with Raisins / Coleslaw Hawaiian / Garlic Seafood with Citrus / Egg Mayo
- Beet & Orange / Spicy Tuna / Grilled Apple & Pineapple / Thai Beef / Chicken & Veg or Pasta
- Herbs Marinated Italian Pasta / Mix Veg in Tomato Cup / Onion Tomato Cucumber Salad
[Selected: ]

RICE & NOODLES (SELECT TWO):
- Tempered Yellow Rice (Cashew Sultana & Fried Onion) / Chicken & Veg Fried...
[Selected: ]

PORK OR FISH (SELECT ONE):
- Pork Black Curry / Slow Cooked Pork & Potato Stew / Braised Pork with Veg / Pork Vindaloo
- Spicy Pork / Thai Fish Red Curry / Baked Fish Ambulthiyal on Banana Leaf
- Fish Stew (SL Style) / Fish Fried & Cooked / Fish Batter Fried (Chili Mayo)
- Mixed Seafood Stew / Spicy Fish Red Curry / Chilli Fish with Gravy
[Selected: ]

VEGETABLES (SELECT THREE):
- Cashew & Carrot / Green Peas & Potato / Mixed Veg / Brinjal Patie Curs
- Mixed Grilled Veg with Sesame / Veg Chopsey / Mushroom Tempered & Onion
- Fried Bittergaurd with Capcicum & Onion
* FREE Dhal Curry or Tempered
[Selected: ]

CONDIMENTS:
1. Mango Chutney
2. Papadam
3. Fried Dry Chilly
4. Chilli Paste

DESSERTS (SELECT FOUR):
- Pineapple & Apple Crumble / Bread & Butter Pudding / Pineapple Pudding
- Fresh Fruit Salad / Fresh Cut Fruits / Assorted Ice Cream
[Selected: ]`,
      },
    ],
    templateBlocks: [
      {
        id: 'tb-1',
        name: '+ Welcome Drinks',
        content: `WELCOME DRINK (SELECT ONE):\n- Apple / Orange / Mixed Fruit / Strawberry & Guava / Black Currant / Soursop / Mandarin\n[Selected: ]\n`,
      },
      {
        id: 'tb-2',
        name: '+ Soups',
        content: `SOUPS WITH BREAD ROLLS & BUTTER (SELECT ONE):\n- Cream of Veg / Cream of Mushroom / Cream of Chicken & Veg / Sweet Corn & Egg Drop / Veg Broth\n[Selected: ]\n`,
      },
      {
        id: 'tb-3',
        name: '+ Salads',
        content: `SALADS (SELECT THREE):\n- Cream Coleslaw / Coleslaw Hawaiian / Russian Salad / Egg Mayo / Seafood & Pasta / Thai Papaya / Tossed Green Salad\n[Selected: ]\n`,
      },
      {
        id: 'tb-4',
        name: '+ Appetizers/Bites',
        content: `APPETIZERS & BITES (SELECT TWO):\n- Fish Cutlets / Chicken Nuggets / Crumb Fried Prawns / Devilled Cashew / Batter Fried Mushrooms\n[Selected: ]\n`,
      },
      {
        id: 'tb-5',
        name: '+ Rice & Noodles',
        content: `RICE & NOODLES (SELECT TWO):\n- Veg Fried Rice / Tempered Yellow Rice / Egg & Veg Rice / Plain Rice / Egg & Veg Noodles / Spaghetti Napolitano\n[Selected: ]\n`,
      },
      {
        id: 'tb-6',
        name: '+ Chicken',
        content: `CHICKEN (SELECT ONE):\n- Baked BBQ Chicken / Chilly Chicken with Mushroom / Chicken Curry / Chicken Devilled\n[Selected: ]\n`,
      },
      {
        id: 'tb-7',
        name: '+ Fish',
        content: `FISH (SELECT ONE):\n- Fish Curry / Fish Stew / Fish Batter Fried (Chilly Mayo) / Sweet & Sour Fish\n[Selected: ]\n`,
      },
      {
        id: 'tb-8',
        name: '+ Pork/Beef',
        content: `PORK OR BEEF (SELECT ONE):\n- Pork Black Curry / Sri Lankan Pork Stew / Beef Curry / Beef Devilled\n[Selected: ]\n`,
      },
      {
        id: 'tb-9',
        name: '+ Vegetables',
        content: `VEGETABLES (SELECT TWO):\n- Cashew White Curry / Mixed Veg Curry / Beans & Pineapple / Veg Chopsuey / Stuffed Capsicum\n[Selected: ]\n`,
      },
      {
        id: 'tb-10',
        name: '+ Seafood/Mutton',
        content: `SEAFOOD & MUTTON (SELECT ONE):\n- Mutton Curry / Mutton Khroma / Cuttlefish Devilled / Hot Butter Cuttlefish / Garlic Prawns / Crabs Pepper Curry\n[Selected: ]\n`,
      },
      {
        id: 'tb-11',
        name: '+ Potatoes/Dhal',
        content: `POTATOES & DHAL (SELECT TWO):\n- Potato Tempered / Lyonnaise Potatoes / Lemon Garlic & Chilli Potato\n- Dhal Curry / Dhal Tempered\n[Selected: ]\n`,
      },
      {
        id: 'tb-12',
        name: '+ Action Stations',
        content: `ACTION STATIONS / LIVE COOKING:\n- Egg Hoppers & Plain Hoppers with Lunu Miris\n- Chicken/Egg Kottu\n- Pasta Station (Penne/Spaghetti with Cheese/Tomato sauce)\n- BBQ Grill (Sausages/Chicken/Pork)\n[Selected: ]\n`,
      },
      {
        id: 'tb-13',
        name: '+ Desserts',
        content: `DESSERTS (SELECT THREE):\n- Fresh Fruits Salad / Watalappan / Cream Caramel / Bread & Butter Pudding / Assorted Ice Cream / Jelly & Custard / Chocolate Biscuit Pudding\n[Selected: ]\n`,
      },
      {
        id: 'tb-14',
        name: '+ Condiments',
        content: `CONDIMENTS:\n1. Chili Paste\n2. Papadam\n3. Fried Dry Chili\n4. Mango Chutney\n5. Maldive Fish Sambol\n`,
      },
    ],
  }),
  actions: {
    initializeStore() {
      // Load Menus
      const savedMenus = localStorage.getItem('slaf-menus')
      if (savedMenus) {
        try {
          this.menus = JSON.parse(savedMenus)
        } catch (error) {
          console.error('Failed to parse saved menus', error)
        }
      }

      // Load Template Blocks
      const savedBlocks = localStorage.getItem('slaf-template-blocks')
      if (savedBlocks) {
        try {
          this.templateBlocks = JSON.parse(savedBlocks)
        } catch (error) {
          console.error('Failed to parse saved template blocks', error)
        }
      }
    },
    saveToStorage() {
      localStorage.setItem('slaf-menus', JSON.stringify(this.menus))
      localStorage.setItem('slaf-template-blocks', JSON.stringify(this.templateBlocks))
    },
    addMenu(menuData) {
      const newMenu = {
        ...menuData,
        id: Date.now().toString(),
        kitchenCost: menuData.kitchenCost || 0,
        fbStatus: menuData.fbStatus || 'DRAFT',
        gasCharge: menuData.gasCharge || 0,
        officeCharge: menuData.officeCharge || 0,
        profitMargin: menuData.profitMargin || 0,
        basePrice: menuData.basePrice || 0, // Ensure basePrice is included
      }
      this.menus.push(newMenu)
      this.saveToStorage()

      try {
        const authStore = useAuthStore()
        const auditStore = useAuditStore()
        auditStore.logAction({
          user: authStore.user?.name || 'System',
          role: authStore.role || 'system',
          action: 'Created Menu',
          module: 'Menu Management',
          details: `Created new menu package: ${newMenu.name}`,
        })
      } catch (e) {
        console.error('Audit log failed', e)
      }
    },
    updateMenu(id, updatedMenu) {
      const index = this.menus.findIndex((m) => m.id === id)
      if (index !== -1) {
        this.menus[index] = { ...this.menus[index], ...updatedMenu }
        this.saveToStorage()

        try {
          const authStore = useAuthStore()
          const auditStore = useAuditStore()
          auditStore.logAction({
            user: authStore.user?.name || 'System',
            role: authStore.role || 'system',
            action: 'Updated Menu',
            module: 'Menu Management',
            details: `Modified menu package: ${updatedMenu.name}`,
          })
        } catch (e) {
          console.error('Audit log failed', e)
        }
      }
    },
    deleteMenu(id) {
      const menuName = this.menus.find((m) => m.id === id)?.name || 'Unknown'
      this.menus = this.menus.filter((m) => m.id !== id)
      this.saveToStorage()

      try {
        const authStore = useAuthStore()
        const auditStore = useAuditStore()
        auditStore.logAction({
          user: authStore.user?.name || 'System',
          role: authStore.role || 'system',
          action: 'Deleted Menu',
          module: 'Menu Management',
          details: `Deleted menu package: ${menuName}`,
          status: 'warning',
        })
      } catch (e) {
        console.error('Audit log failed', e)
      }
    },

    // --- Template Block Actions ---
    addTemplateBlock(block) {
      this.templateBlocks.push({
        ...block,
        id: Date.now().toString() + '-tb',
      })
      this.saveToStorage()
    },
    updateTemplateBlock(id, updatedBlock) {
      const index = this.templateBlocks.findIndex((b) => b.id === id)
      if (index !== -1) {
        this.templateBlocks[index] = { ...this.templateBlocks[index], ...updatedBlock }
        this.saveToStorage()
      }
    },
    deleteTemplateBlock(id) {
      this.templateBlocks = this.templateBlocks.filter((b) => b.id !== id)
      this.saveToStorage()
    },
  },
})
