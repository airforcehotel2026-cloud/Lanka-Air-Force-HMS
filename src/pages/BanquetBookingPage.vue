<template>
  <q-page class="slaf-banquet-page bg-transparent q-pa-md q-md-pa-lg">
    <div class="row justify-center print-hide">
      <div class="col-12" style="max-width: 1200px">
        <!-- Header -->
        <header
          class="row items-center justify-between q-pa-md bg-white rounded-borders shadow-1 q-mb-md"
        >
          <div class="row items-center q-gutter-md">
            <img
              :src="logoUrl"
              alt="Eagles' Lagoon View"
              style="height: 55px; width: auto; object-fit: contain; mix-blend-mode: multiply"
            />
            <div>
              <h1 class="text-h5 text-weight-bold q-my-none text-primary">Eagles' Lagoon View</h1>
              <div class="text-caption text-grey-7">Event & Banquet Management System</div>
            </div>
          </div>
        </header>

        <q-stepper
          v-model="step"
          ref="stepper"
          color="primary"
          animated
          class="shadow-1 rounded-borders"
        >
          <!-- Step 1: Digital Hiring Form -->
          <q-step :name="1" title="Client & Event Info" icon="person" :done="step > 1">
            <div class="text-h6 text-primary q-mb-md">Client Details</div>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-4">
                <q-input
                  v-model="form.nic"
                  outlined
                  dense
                  label="NIC/Passport No"
                  hint="Type NIC and click Search for auto-fill"
                >
                  <template v-slot:append>
                    <q-btn round dense flat icon="search" color="primary" @click="searchByNIC" />
                  </template>
                </q-input>
              </div>
              <div class="col-12 col-md-4">
                <q-input v-model="form.clientName" outlined dense label="Client Name" />
              </div>
              <div class="col-12 col-md-4">
                <q-input v-model="form.profession" outlined dense label="Profession" />
              </div>
              <div class="col-12">
                <q-input v-model="form.address" outlined dense label="Address" />
              </div>
              <div class="col-12 col-md-4">
                <q-input v-model="form.telephone" outlined dense label="Telephone (Land)" />
              </div>
              <div class="col-12 col-md-4">
                <q-input v-model="form.mobile" outlined dense label="Mobile" />
              </div>
              <div class="col-12">
                <q-input v-model="form.email" outlined dense label="E-mail" type="email" />
              </div>
            </div>

            <q-separator class="q-my-lg" />

            <div class="text-h6 text-primary q-mb-md">Event Details</div>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-3">
                <q-select
                  v-model="form.package"
                  :options="packageOptions"
                  outlined
                  dense
                  label="Package"
                  @update:model-value="onPackageChange"
                />
              </div>
              <div class="col-12 col-md-3">
                <q-select
                  v-model="form.venue"
                  :options="['Indoor', 'Outdoor']"
                  outlined
                  dense
                  label="Location"
                />
              </div>
              <div class="col-12 col-md-3">
                <q-input
                  v-model="form.eventType"
                  outlined
                  dense
                  label="Type of Event (e.g. Wedding, Reception)"
                />
              </div>
              <div class="col-12 col-md-3">
                <q-input v-model="form.eventDate" outlined dense type="date" label="Event Date" />
              </div>
              <div class="col-12 col-md-4">
                <q-select
                  v-model="form.mealType"
                  :options="['Lunch', 'Dinner']"
                  outlined
                  dense
                  label="Lunch/Dinner"
                />
              </div>
              <div class="col-12 col-md-3">
                <q-input v-model="form.timeFrom" outlined dense type="time" label="Time (From)" />
              </div>
              <div class="col-12 col-md-3">
                <q-input v-model="form.timeTo" outlined dense type="time" label="Time (To)" />
              </div>
              <div class="col-12 col-md-6">
                <q-input
                  v-model="form.duration"
                  outlined
                  dense
                  label="Duration"
                  disable
                  hint="Calculated automatically"
                />
              </div>

              <div class="col-12 col-md-6">
                <q-input
                  v-model.number="form.guests"
                  type="number"
                  outlined
                  dense
                  label="Number of Guests"
                  :error="
                    (form.package.includes('- Outdoor') && form.guests < 50 && form.guests > 0) ||
                    (form.package === 'Corporate Menu' &&
                      form.venue === 'Outdoor' &&
                      form.guests < 150 &&
                      form.guests > 0) ||
                    (form.package === 'Corporate Menu' &&
                      form.venue === 'Indoor' &&
                      form.guests < 200 &&
                      form.guests > 0) ||
                    (form.package === 'Special Garden Menu' && form.guests < 100 && form.guests > 0)
                  "
                  :error-message="
                    form.package === 'Corporate Menu'
                      ? 'Minimum ' +
                        (form.venue === 'Indoor' ? '200' : '150') +
                        ' Pax required for Corporate Menu'
                      : form.package === 'Special Garden Menu'
                        ? 'Minimum 100 Pax required for Special Garden Menu'
                        : 'Minimum 50 Pax required for Outdoor Menus'
                  "
                />
              </div>
              <div class="col-12 col-md-6">
                <q-input
                  v-model.number="form.netPerPerson"
                  type="number"
                  outlined
                  dense
                  label="Net per Person (LKR)"
                  :hint="netPerPersonHint"
                  :bg-color="form.netPerPerson > 0 ? 'green-1' : ''"
                />
              </div>
            </div>
          </q-step>

          <!-- Step 2: BEO Module -->
          <q-step :name="2" title="Banquet Event Order" icon="assignment" :done="step > 2">
            <div class="text-h6 text-primary q-mb-md">Kitchen Department</div>
            <div class="row q-col-gutter-md q-mb-md">
              <div class="col-12 col-md-4">
                <q-input v-model="beo.location" outlined dense label="Location" />
              </div>
              <div class="col-12 col-md-4">
                <q-input v-model="beo.poruwaTime" outlined dense type="time" label="Poruwa Time" />
              </div>
              <div class="col-12 col-md-4">
                <q-input
                  v-model="beo.servingTime"
                  outlined
                  dense
                  type="time"
                  label="Food Serving Time"
                />
              </div>
              <div class="col-12">
                <div class="row items-center justify-between q-mb-sm">
                  <div class="text-subtitle2 text-primary">Menu Selection</div>
                  <q-toggle
                    v-model="isInteractiveMode"
                    label="Interactive Builder"
                    left-label
                    color="accent"
                  />
                </div>

                <!-- Interactive Mode -->
                <div
                  v-if="isInteractiveMode && parsedMenuBlocks.length > 0"
                  class="row q-col-gutter-sm bg-amber-1 q-pa-md rounded-borders shadow-1 border-primary"
                >
                  <template v-for="block in parsedMenuBlocks" :key="block.id">
                    <div class="col-12" v-if="block.isSelectable && block.options.length > 0">
                      <div class="text-weight-bold q-mb-xs">{{ block.header }}</div>
                      <q-select
                        :model-value="block.selected"
                        @update:model-value="(val) => updateMenuBlockSelection(block.id, val)"
                        :options="block.options"
                        @filter="filterMenuOptions"
                        :multiple="true"
                        use-input
                        use-chips
                        new-value-mode="add-unique"
                        outlined
                        dense
                        bg-color="white"
                      >
                        <template v-slot:hint>
                          <span class="text-primary text-weight-medium">
                            <span v-if="block.maxSelections"
                              >Package Default: {{ block.maxSelections }} item(s).
                            </span>
                            <span class="text-grey-7">Select extra or type custom items.</span>
                          </span>
                        </template>
                      </q-select>
                    </div>
                    <div class="col-12" v-else-if="block.rawText.trim()">
                      <div class="text-weight-bold q-mb-xs q-mt-sm" v-if="block.header">
                        {{ block.header }}
                      </div>
                      <div style="white-space: pre-wrap" class="text-caption text-grey-9">
                        {{ block.rawText.substring(block.header.length).trim() }}
                      </div>
                    </div>
                  </template>
                </div>

                <!-- Manual Text Editor / Fallback -->
                <q-input
                  v-else
                  v-model="beo.menuSelection"
                  type="textarea"
                  outlined
                  dense
                  label="Menu Details (Raw Text)"
                  hint="💡 You can freely edit this text. Switching back to Interactive mode may lose formatting if 'Selected:' tags are removed."
                  bg-color="amber-1"
                  rows="12"
                />
              </div>
              <div class="col-12">
                <q-input
                  v-model="beo.specialRemarks"
                  type="textarea"
                  outlined
                  dense
                  label="Special Remarks"
                  rows="2"
                />
              </div>
            </div>

            <q-separator class="q-my-md" />

            <div class="text-h6 text-primary q-mb-md">Banquet Hall</div>
            <div class="row q-col-gutter-md q-mb-md">
              <div class="col-12 col-md-6">
                <q-input v-model="beo.setup" outlined dense label="Hall Setup details" />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="beo.seatCovers" outlined dense label="Seat Covers" />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="beo.decorations" outlined dense label="Decorations" />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="beo.multimedia" outlined dense label="Multimedia Requirements" />
              </div>
              <div class="col-12">
                <q-input v-model="beo.coordinator" outlined dense label="Event Coordinator" />
              </div>
            </div>

            <q-separator class="q-my-md" />

            <div class="text-h6 text-primary q-mb-md">Facilities</div>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-3">
                <q-checkbox v-model="beo.bridalRoom" label="Bridal Room Required" color="primary" />
              </div>
              <div class="col-12 col-md-3">
                <q-checkbox v-model="beo.teaTable" label="Tea Table" color="primary" />
              </div>
              <div class="col-12 col-md-3" v-if="beo.teaTable">
                <q-input
                  v-model.number="beo.teaTablePax"
                  type="number"
                  outlined
                  dense
                  label="No of Pax"
                />
              </div>
              <div class="col-12 col-md-3" v-if="beo.teaTable">
                <q-input v-model="beo.teaTableTime" type="time" outlined dense label="Tea Time" />
              </div>
            </div>
          </q-step>

          <!-- Step 3: Billing -->
          <q-step :name="3" title="Smart Billing" icon="receipt_long" :done="step > 3">
            <div class="row q-col-gutter-lg">
              <div class="col-12 col-md-7">
                <div class="text-h6 text-primary q-mb-md">Extra Food & Beverage Items</div>
                <div
                  v-for="(item, index) in foodItems"
                  :key="index"
                  class="row q-col-gutter-sm q-mb-sm items-center"
                >
                  <div class="col-4">
                    <q-select
                      v-model="item.name"
                      :options="foodOptions"
                      option-label="name"
                      option-value="name"
                      emit-value
                      map-options
                      outlined
                      dense
                      label="Item"
                      @update:model-value="(val) => onFoodItemChange(val, index)"
                    />
                  </div>
                  <div class="col-3">
                    <q-input
                      v-model.number="item.unitPrice"
                      type="number"
                      outlined
                      dense
                      label="Unit Price"
                    />
                  </div>
                  <div class="col-2">
                    <q-input v-model.number="item.qty" type="number" outlined dense label="Qty" />
                  </div>
                  <div class="col-2 text-right text-weight-bold">
                    {{ formatCurrency(item.qty * item.unitPrice) }}
                  </div>
                  <div class="col-1 text-right">
                    <q-btn
                      flat
                      round
                      color="negative"
                      icon="delete"
                      size="sm"
                      @click="removeFoodItem(index)"
                    />
                  </div>
                </div>
                <q-btn
                  flat
                  color="accent"
                  text-color="black"
                  icon="add"
                  label="Add Food Item"
                  @click="addFoodItem"
                  class="q-mt-sm"
                />

                <q-separator class="q-my-lg" />

                <div class="text-h6 text-primary q-mb-md">Other Charges</div>
                <div class="row q-col-gutter-sm">
                  <div class="col-12 col-sm-6">
                    <q-input
                      v-model.number="otherCharges.multimedia"
                      type="number"
                      outlined
                      dense
                      label="Multimedia"
                    />
                  </div>
                  <div class="col-12 col-sm-6">
                    <q-input
                      v-model.number="otherCharges.champagnePyramid"
                      type="number"
                      outlined
                      dense
                      label="Champagne Pyramid"
                    />
                  </div>
                  <div class="col-12 col-sm-6">
                    <q-input
                      v-model.number="otherCharges.extraHallCharge"
                      type="number"
                      outlined
                      dense
                      label="Extra Hall Charge"
                    />
                  </div>
                  <div class="col-12 col-sm-6">
                    <q-input
                      v-model.number="otherCharges.actionStation"
                      type="number"
                      outlined
                      dense
                      label="Action Station Charges"
                    />
                  </div>
                  <div class="col-12 col-sm-6">
                    <q-input
                      v-model.number="otherCharges.overhead"
                      type="number"
                      outlined
                      dense
                      label="Overhead Charges"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-5">
                <!-- Summary Card -->
                <q-card class="bg-blue-1 border-primary shadow-0">
                  <q-card-section>
                    <div class="text-h6 text-primary q-mb-md">Live Calculation</div>

                    <div class="row justify-between q-mb-xs">
                      <span
                        >Event Pax ({{ form.guests }} x
                        {{ formatCurrency(form.netPerPerson) }})</span
                      >
                      <strong>{{ formatCurrency(mainPackageTotal) }}</strong>
                    </div>
                    <div class="row justify-between q-mb-xs">
                      <span>Extra Food</span>
                      <strong>{{ formatCurrency(extraFoodTotal) }}</strong>
                    </div>
                    <div class="row justify-between q-mb-sm">
                      <span>Other Charges</span>
                      <strong>{{ formatCurrency(otherChargesTotal) }}</strong>
                    </div>
                    <q-separator />
                    <div class="row justify-between q-my-sm text-h6 text-primary">
                      <span>Grand Total</span>
                      <strong>{{ formatCurrency(grandTotal) }}</strong>
                    </div>
                    <q-separator class="q-mb-md" />

                    <div class="q-mb-sm">
                      <q-input
                        v-model.number="payments.discount"
                        type="number"
                        outlined
                        dense
                        bg-color="white"
                        label="Special Discount (-)"
                      />
                    </div>
                    <div class="q-mb-sm">
                      <q-input
                        v-model.number="payments.deposit"
                        type="number"
                        outlined
                        dense
                        bg-color="white"
                        label="Refundable Deposit (+)"
                      />
                    </div>
                    <div class="q-mb-md">
                      <q-input
                        v-model.number="payments.advance"
                        type="number"
                        outlined
                        dense
                        bg-color="white"
                        label="Less - Advance (-)"
                      />
                    </div>

                    <div
                      class="row justify-between items-center text-subtitle1 q-pa-sm bg-primary text-white rounded-borders"
                    >
                      <span>Final Payment Due</span>
                      <strong class="text-h5 text-accent">{{
                        formatCurrency(finalPayment)
                      }}</strong>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-step>

          <!-- Step 4: Logic & Reminders -->
          <q-step :name="4" title="Finalize & BEO Details" icon="notifications">
            <div class="text-h6 text-primary q-mb-md">Event Lifecycle & Reminders</div>

            <q-banner v-if="!form.eventDate" class="bg-grey-3 text-grey-8 rounded-borders">
              Please enter an Event Date in Step 1 to calculate reminders.
            </q-banner>

            <div v-else class="q-gutter-y-md">
              <q-banner
                v-if="form.package === 'Corporate Menu' || form.package === 'Special Garden Menu'"
                class="bg-blue-1 text-primary border-primary shadow-0 q-mb-md"
                rounded
              >
                <template v-slot:avatar>
                  <q-icon name="info" color="primary" />
                </template>
                <div class="text-weight-bold text-subtitle1">
                  {{ form.package }} Operational Notes
                </div>
                <div class="text-caption">
                  <ul class="q-pl-md q-my-none">
                    <li>
                      The above menu will be served for corporate clients only (Not for
                      Weddings/Homecomings).
                    </li>
                    <li>
                      Shelters and lightings if required are to be arranged by the client for garden
                      functions.
                    </li>
                    <li>
                      <strong>
                        Minimum Pax:
                        {{ getSpecificMenuNote(form.package) }}
                      </strong>
                    </li>
                  </ul>
                </div>
              </q-banner>

              <q-banner
                v-if="form.package.includes('- Outdoor')"
                class="bg-blue-1 text-primary border-primary shadow-0 q-mb-md"
                rounded
              >
                <template v-slot:avatar>
                  <q-icon name="info" color="primary" />
                </template>
                <div class="text-weight-bold text-subtitle1">Outdoor Menu Operational Notes</div>
                <div class="text-caption">
                  <ul class="q-pl-md q-my-none">
                    <li>
                      The above menu will be served for corporate clients only (Not for
                      Weddings/Homecomings).
                    </li>
                    <li>Shelters and lightings if required are to be arranged by the client.</li>
                    <li>
                      <strong
                        >Under any circumstances the function cannot be shifted inside the
                        Hall.</strong
                      >
                    </li>
                  </ul>
                </div>
              </q-banner>

              <q-card class="bg-white border-primary shadow-0">
                <q-card-section class="row items-center justify-between">
                  <div>
                    <div class="text-h6 text-primary">Event Countdown</div>
                    <div class="text-subtitle1">
                      Days remaining: <strong>{{ daysUntilEvent }} days</strong>
                    </div>
                  </div>
                  <q-icon name="event" size="xl" color="primary" />
                </q-card-section>
              </q-card>

              <!-- T-45 Banner -->
              <q-banner
                v-if="daysUntilEvent <= 45 && daysUntilEvent > 14"
                class="bg-orange-1 text-orange-9 border-warning shadow-0"
                rounded
              >
                <template v-slot:avatar>
                  <q-icon name="warning" color="warning" />
                </template>
                <div class="text-weight-bold text-subtitle1">T-45 Days Alert: Half Payment Due</div>
                <div class="text-caption">
                  Client should pay 50% of the calculated total package by now.
                </div>
                <template v-slot:action>
                  <q-btn
                    flat
                    color="warning"
                    icon="phone"
                    label="Call Customer"
                    @click="callCustomer"
                    text-color="orange-10"
                  />
                </template>
              </q-banner>

              <!-- T-14 Banner -->
              <q-banner
                v-if="daysUntilEvent <= 14 && daysUntilEvent >= 0"
                class="bg-red-1 text-red-9 border-negative shadow-0"
                rounded
              >
                <template v-slot:avatar>
                  <q-icon name="error" color="negative" />
                </template>
                <div class="text-weight-bold text-subtitle1">
                  T-14 Days Alert: Full Payment & Menu Finalization
                </div>
                <div class="text-caption">
                  Finalize the menu and collect the full remaining balance immediately.
                </div>
                <template v-slot:action>
                  <q-btn
                    flat
                    color="negative"
                    icon="phone"
                    label="Call Customer"
                    @click="callCustomer"
                  />
                </template>
              </q-banner>

              <q-banner v-if="daysUntilEvent < 0" class="bg-grey-3 text-grey-8 rounded">
                This event has already passed.
              </q-banner>
            </div>

            <div class="q-mt-xl row justify-center">
              <q-btn
                color="primary"
                icon="print"
                label="Print BEO & Invoice"
                size="large"
                @click="printInvoice"
                class="q-px-xl action-btn"
              />
            </div>
          </q-step>

          <!-- Global Navigation Buttons -->
          <template v-slot:navigation>
            <q-stepper-navigation>
              <div class="row q-mt-md justify-between">
                <q-btn
                  v-if="step > 1"
                  flat
                  color="primary"
                  @click="$refs.stepper.previous()"
                  label="Back"
                  icon="arrow_back"
                  class="q-ml-sm action-btn"
                />
                <q-space />
                <q-btn
                  v-if="step < 4"
                  @click="$refs.stepper.next()"
                  color="primary"
                  label="Continue"
                  icon-right="arrow_forward"
                  class="action-btn"
                />
                <q-btn
                  v-if="step === 4"
                  color="accent"
                  text-color="black"
                  label="Finalize Booking & Print"
                  class="text-weight-bold action-btn"
                  @click="printInvoice"
                  icon="print"
                />
              </div>
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </div>
    </div>

    <!-- Hidden Print Section (Invoice/BEO Style) -->
    <div class="invoice-section bg-white text-black">
      <div
        class="row items-center justify-between q-mb-lg pb-4"
        style="border-bottom: 2px solid #00308f"
      >
        <div class="row items-center">
          <img
            :src="logoUrl"
            alt="Eagles' Lagoon View"
            class="q-mr-md"
            style="height: 65px; width: auto; object-fit: contain"
          />
          <div>
            <h1 class="text-h4 text-weight-bold q-my-none" style="color: #00308f">
              Eagles' Lagoon View
            </h1>
            <div class="text-subtitle1 text-grey-8">Banquet Event Order & Invoice</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-weight-bold" style="color: #00308f">Invoice Date</div>
          <div>{{ new Date().toLocaleDateString('en-GB') }}</div>
        </div>
      </div>

      <div class="row q-col-gutter-lg q-mb-lg">
        <div class="col-6">
          <div class="text-weight-bold text-uppercase q-mb-sm" style="color: #00308f">
            Client Details
          </div>
          <div><strong>Name:</strong> {{ form.clientName || 'N/A' }}</div>
          <div><strong>Contact:</strong> {{ form.mobile || form.telephone || 'N/A' }}</div>
          <div><strong>Address:</strong> {{ form.address || 'N/A' }}</div>
          <div><strong>Email:</strong> {{ form.email || 'N/A' }}</div>
        </div>
        <div class="col-6">
          <div class="text-weight-bold text-uppercase q-mb-sm" style="color: #00308f">
            Event Info
          </div>
          <div><strong>Date:</strong> {{ form.eventDate || 'N/A' }}</div>
          <div>
            <strong>Time:</strong> {{ form.timeFrom || '--:--' }} to {{ form.timeTo || '--:--' }}
          </div>
          <div><strong>Type:</strong> {{ form.eventType || 'N/A' }} ({{ form.mealType }})</div>
          <div>
            <strong>Pax / Rate:</strong> {{ form.guests }} / {{ formatCurrency(form.netPerPerson) }}
          </div>
        </div>
      </div>

      <div class="text-weight-bold text-uppercase q-mb-sm q-mt-lg" style="color: #00308f">
        Banquet Event Order (BEO)
      </div>
      <table class="full-width invoice-table q-mb-lg">
        <tbody>
          <tr>
            <td width="30%"><strong>Location</strong></td>
            <td>{{ beo.location }}</td>
          </tr>
          <tr>
            <td><strong>Poruwa / Serving Time</strong></td>
            <td>{{ beo.poruwaTime || 'N/A' }} / {{ beo.servingTime || 'N/A' }}</td>
          </tr>
          <tr>
            <td><strong>Menu</strong></td>
            <td v-html="printedMenuHtml"></td>
          </tr>
          <tr>
            <td><strong>Setup / Seat Covers</strong></td>
            <td>{{ beo.setup || 'N/A' }} / {{ beo.seatCovers || 'N/A' }}</td>
          </tr>
          <tr>
            <td><strong>Decorations / Multimedia</strong></td>
            <td>{{ beo.decorations || 'N/A' }} / {{ beo.multimedia || 'N/A' }}</td>
          </tr>
          <tr>
            <td><strong>Coordinator</strong></td>
            <td>{{ beo.coordinator || 'N/A' }}</td>
          </tr>
          <tr>
            <td><strong>Special Remarks</strong></td>
            <td>{{ beo.specialRemarks || 'N/A' }}</td>
          </tr>
          <tr v-if="beo.teaTable">
            <td><strong>Tea Table</strong></td>
            <td>{{ beo.teaTablePax }} Pax @ {{ beo.teaTableTime }}</td>
          </tr>
        </tbody>
      </table>

      <div class="text-weight-bold text-uppercase q-mb-sm q-mt-lg" style="color: #00308f">
        Financial Summary
      </div>
      <table class="full-width invoice-table text-right">
        <thead>
          <tr style="background-color: #f5f5f5">
            <th class="text-left">Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">Main Event Package ({{ form.guests }} Pax)</td>
            <td>{{ formatCurrency(mainPackageTotal) }}</td>
          </tr>
          <tr>
            <td class="text-left">Extra Food Items</td>
            <td>{{ formatCurrency(extraFoodTotal) }}</td>
          </tr>
          <tr>
            <td class="text-left">Other Charges (Multimedia, Hall, Overheads)</td>
            <td>{{ formatCurrency(otherChargesTotal) }}</td>
          </tr>
          <tr class="bg-grey-2 text-weight-bold">
            <td class="text-left">Grand Total</td>
            <td>{{ formatCurrency(grandTotal) }}</td>
          </tr>
          <tr>
            <td class="text-left">+ Refundable Deposit</td>
            <td>{{ formatCurrency(payments.deposit) }}</td>
          </tr>
          <tr>
            <td class="text-left">- Less Special Discount</td>
            <td style="color: #c10015">- {{ formatCurrency(payments.discount) }}</td>
          </tr>
          <tr>
            <td class="text-left">- Less Advance Payment</td>
            <td style="color: #c10015">- {{ formatCurrency(payments.advance) }}</td>
          </tr>
          <tr
            style="
              font-size: 1.2em;
              border-top: 2px solid #00308f;
              border-bottom: 2px solid #00308f;
              background-color: #e3f2fd;
              color: #00308f;
            "
          >
            <td class="text-left text-weight-bold">Final Balance Pending</td>
            <td class="text-weight-bold">{{ formatCurrency(finalPayment) }}</td>
          </tr>
        </tbody>
      </table>

      <div class="row justify-between q-mt-xl pt-xl" style="padding-top: 80px">
        <div class="text-center" style="width: 200px; border-top: 1px solid #000; padding-top: 5px">
          Client Signature
        </div>
        <div class="text-center" style="width: 200px; border-top: 1px solid #000; padding-top: 5px">
          Authorized Officer
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useMenuStore } from 'src/stores/menuStore'
import { useEventStore } from 'src/stores/eventStore'
import { useQuasar } from 'quasar'

// Logo URL for GitHub Pages compatibility
const logoUrl = computed(() => import.meta.env.BASE_URL + 'images/logo.png')

// Initialize Stores
const menuStore = useMenuStore()
const eventStore = useEventStore()
const $q = useQuasar()

onMounted(() => {
  menuStore.initializeStore()
  eventStore.initializeStore()
})

// Auto-fill Net per Person when package changes
const onPackageChange = (selectedPackage) => {
  if (selectedPackage === 'Custom') {
    form.value.netPerPerson = 0
    return
  }
  const menu = menuStore.menus.find((m) => m.name === selectedPackage)
  if (menu && menu.basePrice > 0) {
    form.value.netPerPerson = menu.basePrice
  } else {
    form.value.netPerPerson = 0
  }
}

const netPerPersonHint = computed(() => {
  if (form.value.package === 'Custom') return 'Enter price manually'
  const menu = menuStore.menus.find((m) => m.name === form.value.package)
  if (!menu) return 'Enter price manually'
  if (menu.basePrice > 0) return `✅ Auto-filled from "${form.value.package}" package`
  return '⚠️ This package has no fixed price — enter manually'
})

const packageOptions = computed(() => {
  const options = ['Custom']
  menuStore.menus.forEach((m) => options.push(m.name))
  return options
})

const step = ref(1)

// Form - Step 1
const form = ref({
  clientName: '',
  profession: '',
  address: '',
  nic: '',
  email: '',
  telephone: '',
  mobile: '',
  package: 'Custom',
  venue: 'Outdoor',
  eventType: '',
  eventDate: '',
  mealType: 'Lunch', // Lunch/Dinner
  timeFrom: '',
  timeTo: '',
  duration: '',
  guests: 0,
  netPerPerson: 0,
})

watch([() => form.value.timeFrom, () => form.value.timeTo], ([from, to]) => {
  if (from && to) {
    const dFrom = new Date(`2000-01-01T${from}`)
    let dTo = new Date(`2000-01-01T${to}`)
    if (dTo < dFrom) dTo = new Date(`2000-01-02T${to}`)
    const diffHours = (dTo - dFrom) / (1000 * 60 * 60)
    form.value.duration = `${diffHours.toFixed(1)} Hours`
  }
})

watch(
  () => form.value.package,
  (newPkg) => {
    // Find matching package in store
    const storePackage = menuStore.menus.find((m) => m.name === newPkg)

    if (storePackage) {
      form.value.netPerPerson = storePackage.basePrice > 0 ? storePackage.basePrice : 0

      // Auto-set venue based on package logic
      if (storePackage.venue && storePackage.venue !== 'Any') {
        form.value.venue = storePackage.venue === 'Garden' ? 'Outdoor' : storePackage.venue
      }

      // Automatically fill the menu selection box in Step 2
      autoFillTemplate()
    } else {
      // Must be 'Custom'
      beo.value.menuSelection = ''
    }
  },
)

// Mock Database for quick search
const searchByNIC = () => {
  if (form.value.nic === '123456789V' || form.value.nic === '200012345678') {
    form.value.clientName = 'Sqn Ldr A.B. Perera'
    form.value.profession = 'Air Force Officer'
    form.value.address = 'SLAF Base, Katunayake'
    form.value.telephone = '0112345678'
    form.value.mobile = '0771234567'
    form.value.email = 'perera@slaf.lk'
  } else {
    alert('No existing records found for this NIC.')
  }
}

// BEO - Step 2
const beo = ref({
  location: "Eagles' Lagoon View",
  poruwaTime: '',
  servingTime: '',
  menuSelection: '',
  specialRemarks: '',
  setup: '',
  seatCovers: '',
  decorations: '',
  multimedia: '',
  coordinator: '',
  bridalRoom: false,
  teaTable: false,
  teaTablePax: 0,
  teaTableTime: '',
})

const isInteractiveMode = ref(true)

const parsedMenuBlocks = computed(() => {
  if (!beo.value.menuSelection) return []

  const blocks = beo.value.menuSelection.split('\n\n')
  return blocks.map((blockText, index) => {
    const lines = blockText.split('\n')
    const headerLine = lines[0] || ''
    const isSelectable = blockText.includes('[Selected: ')

    let options = []
    let maxSelections = 1

    if (isSelectable) {
      const upperHeader = headerLine.toUpperCase()
      if (upperHeader.includes('SELECT TWO')) maxSelections = 2
      else if (upperHeader.includes('SELECT THREE')) maxSelections = 3
      else if (upperHeader.includes('SELECT FOUR')) maxSelections = 4
      else if (upperHeader.includes('SELECT FIVE')) maxSelections = 5
      else if (upperHeader.includes('SELECT SIX')) maxSelections = 6
      else if (upperHeader.includes('SELECT SEVEN')) maxSelections = 7
      else if (upperHeader.includes('SELECT EIGHT')) maxSelections = 8

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim()
        if (line.startsWith('-')) {
          const parts = line
            .substring(1)
            .split('/')
            .map((p) => p.trim())
            .filter(Boolean)
          options.push(...parts)
        } else if (/^\d+\./.test(line)) {
          const part = line.replace(/^\d+\.\s*/, '').trim()
          if (part) options.push(part)
        }
      }
    }

    let currentSelection = []
    if (isSelectable) {
      const selectedMatch = blockText.match(/\[Selected:\s*(.*?)\]/)
      if (selectedMatch && selectedMatch[1]) {
        currentSelection = selectedMatch[1]
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean)
      }
    }

    return {
      id: index,
      header: headerLine,
      isSelectable,
      options,
      maxSelections,
      selected: currentSelection,
      rawText: blockText,
    }
  })
})

const printedMenuHtml = computed(() => {
  if (!beo.value.menuSelection) return 'N/A'

  const blocks = parsedMenuBlocks.value
  let html = []

  for (const block of blocks) {
    if (block.isSelectable) {
      if (block.selected && block.selected.length > 0) {
        html.push(
          `<div style="margin-bottom: 4px;"><strong>${block.header}</strong>: ${block.selected.join(', ')}</div>`,
        )
      }
    } else {
      if (block.rawText.trim()) {
        const text = block.rawText.trim().replace(/\n/g, '<br/>')
        html.push(`<div style="margin-bottom: 4px;">${text}</div>`)
      }
    }
  }

  return html.length > 0 ? html.join('') : beo.value.menuSelection.replace(/\n/g, '<br/>')
})

const updateMenuBlockSelection = (blockId, newSelection) => {
  const currentBlocks = beo.value.menuSelection.split('\n\n')
  const targetBlock = currentBlocks[blockId]

  if (targetBlock) {
    const selectedString = newSelection.join(', ')
    const updatedBlock = targetBlock.replace(/\[Selected: .*?\]/, `[Selected: ${selectedString}]`)
    currentBlocks[blockId] = updatedBlock
    beo.value.menuSelection = currentBlocks.join('\n\n')
  }
}

const filterMenuOptions = (val, update) => {
  update()
}

const autoFillTemplate = () => {
  const pkgName = form.value.package
  const storePackage = menuStore.menus.find((m) => m.name === pkgName)

  if (storePackage) {
    beo.value.menuSelection = storePackage.template
    isInteractiveMode.value = true
  } else {
    beo.value.menuSelection = ''
  }
}

const getSpecificMenuNote = (pkgName) => {
  const storePackage = menuStore.menus.find((m) => m.name === pkgName)
  if (!storePackage) return 'N/A'

  // Specific hardcoded string logic backward compatibility for banners
  if (pkgName === 'Corporate Menu') {
    return '200 for Indoor, 150 for Outdoor functions.'
  } else if (pkgName === 'Special Garden Menu') {
    return '100 for outdoor functions.'
  }
  return storePackage.minPax + ' Pax required.'
}

// Billing - Step 3
const foodOptions = [
  { name: 'Special Bite Package', price: 0 },
  { name: 'Chicken (1 Kg)', price: 3800 },
  { name: 'Beef (1 Kg)', price: 4500 },
  { name: 'Pork (1 Kg)', price: 3600 },
  { name: 'Fish (1 Kg)', price: 4800 },
  { name: 'Prawns (1 Kg)', price: 5500 },
  { name: 'Cuttlefish (1 Kg)', price: 5000 },
  { name: 'Chicken Sausages (1 Kg)', price: 3000 },
  { name: 'Chicken Bockwurst (1 Kg)', price: 3500 },
  { name: 'Chicken Cocktail Sausage (1 Kg)', price: 3500 },
  { name: 'Chicken Cheese Cocktail Sausage (1 Kg)', price: 4000 },
  { name: 'French Fries (1 Kg)', price: 4000 },
  { name: 'Mushroom (1 Kg)', price: 3500 },
  { name: 'Vegetables (1 Kg)', price: 2500 },
  { name: 'Dessert: Fresh Fruit Salad', price: 450 },
  { name: 'Dessert: Watalappan', price: 250 },
  { name: 'Dessert: Bread & Butter Pudding', price: 250 },
  { name: 'Dessert: Cream Caramel', price: 250 },
]

const foodItems = ref([])
const addFoodItem = () => foodItems.value.push({ name: '', qty: 1, unitPrice: 0 })
const removeFoodItem = (index) => foodItems.value.splice(index, 1)

const onFoodItemChange = (val, index) => {
  const option = foodOptions.find((opt) => opt.name === val)
  if (option) {
    foodItems.value[index].unitPrice = option.price
  }
}

const otherCharges = ref({
  multimedia: 0,
  champagnePyramid: 0,
  extraHallCharge: 0,
  actionStation: 0,
  overhead: 0,
})

const payments = ref({
  advance: 0,
  deposit: 0,
  discount: 0,
})

// Overhead charges auto-calculation
watch(
  () => form.value.guests,
  (pax) => {
    if (pax < 50) {
      otherCharges.value.overhead = 135000 // Default for < 50
    } else if (pax >= 50 && pax <= 74) {
      otherCharges.value.overhead = 135000
    } else if (pax >= 75 && pax <= 99) {
      otherCharges.value.overhead = 113000
    } else if (pax >= 100 && pax <= 124) {
      otherCharges.value.overhead = 90000
    } else if (pax >= 125 && pax <= 149) {
      otherCharges.value.overhead = 68000
    } else if (pax >= 150 && pax <= 174) {
      otherCharges.value.overhead = 52000
    } else if (pax >= 175 && pax <= 199) {
      otherCharges.value.overhead = 38000
    } else {
      otherCharges.value.overhead = 0 // Assuming free for 200+
    }
  },
  { immediate: true }, // trigger on load
)

// Calculations
const mainPackageTotal = computed(() => (form.value.guests || 0) * (form.value.netPerPerson || 0))
const extraFoodTotal = computed(() =>
  foodItems.value.reduce((sum, item) => sum + item.qty * item.unitPrice, 0),
)
const otherChargesTotal = computed(() =>
  Object.values(otherCharges.value).reduce((sum, val) => sum + (Number(val) || 0), 0),
)
const grandTotal = computed(
  () => mainPackageTotal.value + extraFoodTotal.value + otherChargesTotal.value,
)
const finalPayment = computed(
  () =>
    grandTotal.value +
    (payments.value.deposit || 0) -
    (payments.value.advance || 0) -
    (payments.value.discount || 0),
)

// Formatting
const formatCurrency = (val) =>
  new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR' }).format(val || 0)

// Reminders - Step 4
const daysUntilEvent = computed(() => {
  if (!form.value.eventDate) return null
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const eventD = new Date(form.value.eventDate)
  eventD.setHours(0, 0, 0, 0)
  const diffTime = eventD - today
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
})

const callCustomer = () => {
  const num = form.value.mobile || form.value.telephone
  if (num) {
    window.location.href = `tel:${num}`
  } else {
    alert('No contact number available to dial.')
  }
}

const saveBookingToStore = () => {
  if (!form.value.eventDate || !form.value.clientName) return false

  // Build a compact title: EventType - ClientName
  const title = `${form.value.eventType || form.value.package} - ${form.value.clientName}`

  eventStore.addEvent({
    title,
    client: form.value.clientName,
    date: form.value.eventDate,
    timeFrom: form.value.timeFrom || '00:00',
    timeTo: form.value.timeTo || '23:59',
    venue: form.value.venue || 'Main Banquet Hall',
    package: form.value.package,
    pax: form.value.guests || 0,
    status: 'Confirmed',
    color: 'slaf-primary',
  })
  return true
}

const printInvoice = () => {
  if (!form.value.clientName || !form.value.eventDate) {
    $q.notify({
      type: 'warning',
      message: 'Please fill in Client Name and Event Date before finalizing.',
      position: 'top',
    })
    return
  }

  $q.dialog({
    title: '✅ Save & Print Booking',
    message: `Save this booking for "${form.value.clientName}" (${form.value.eventDate}) to the Calendar and Reports?`,
    ok: { label: 'Save & Print', color: 'primary', unelevated: true },
    cancel: { label: 'Print Only', flat: true, color: 'grey' },
    persistent: true,
  })
    .onOk(() => {
      saveBookingToStore()
      $q.notify({
        type: 'positive',
        message: '📅 Booking saved to Calendar & Reports!',
        position: 'top',
      })
      setTimeout(() => window.print(), 400)
    })
    .onCancel(() => {
      window.print()
    })
}
</script>

<style lang="scss">
/* SLAF Branding Variables applied strictly for this component */
$primary: #00308f;
$accent: #ffd700;

.slaf-banquet-page {
  /* Inject Quasar CSS Variables natively so inner components adapt automatically */
  --q-primary: #00308f;
  --q-accent: #ffd700;

  .text-primary {
    color: $primary !important;
  }
  .bg-primary {
    background-color: $primary !important;
  }
  .text-accent {
    color: $accent !important;
  }
  .bg-accent {
    background-color: $accent !important;
  }

  .border-primary {
    border: 1px solid $primary;
  }
  .border-warning {
    border: 1px solid #f2c037;
  }
  .border-negative {
    border: 1px solid #c10015;
  }

  .border-top {
    border-top: 1px solid #e0e0e0;
  }

  .action-btn {
    transition: transform 0.2s;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    }
  }
}

.invoice-section {
  display: none; // Hidden on screen, visible only on print
}

/* Print Specific Styles */
@media print {
  @page {
    margin: 1cm;
    size: auto;
  }

  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    background-color: white !important;
  }

  .print-hide,
  .q-drawer-container,
  .q-header,
  .q-footer,
  aside.q-drawer,
  .q-layout__shadow {
    display: none !important;
  }

  .q-page-container {
    padding-top: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-bottom: 0 !important;
  }

  .invoice-section {
    display: block !important;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    margin: 0;
    padding: 20px;
  }

  .invoice-table {
    border-collapse: collapse;
    td,
    th {
      border: 1px solid #ccc;
      padding: 10px;
    }
  }
}
</style>
