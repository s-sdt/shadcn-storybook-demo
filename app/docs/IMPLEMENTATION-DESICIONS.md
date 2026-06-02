# Implementation Decisions

## Where to put stories (ref:`https://storybook.js.org/docs/writing-stories#component-story-format`)

A component’s stories are defined in a story file that lives alongside the component file. The story file is for development-only, and it won't be included in your production bundle. In your filesystem, it looks something like this:
components/
├─ Button/
│ ├─ Button.js | ts | jsx | tsx | vue | svelte
│ ├─ Button.stories.js | ts | jsx | tsx | svelte

## components

### OfferCard

- Status shown twice intentionally: as a rotated watermark text AND as a Badge, as a design decision
- `price` is a string since getachef does currency formatting
- use Template Component (ref:`https://storybook.js.org/docs/writing-stories/stories-for-multiple-components#creating-a-template-component`) for offercard.stories.tsx

### RequestCard

- Status values are display labels,
  -getachef DB values (src/schemas/request.ts):
  - `BOKAD` : `"CONFIRMED"`
  - `SKICKAD` : `"PENDING"`
  - `INAKTIV` : `"CANCELLED"`

- Status shown twice intentionally: as a rotated watermark text AND as a Badge, as a design decision
- `uid` shown as a Button link to display customer info on hover, in getachef -> `AccountHoverCard` -> (`src/app/workspace/chef/requests/ChefRequestsPage.tsx`)
- image is a placeholder (`placehold.co`) ,no real map
- `onHide` saves request to `hiddenRequests` in getachef -> (`src/app/workspace/chef/requests/ChefRequestsPage.tsx`)
- Template Component is used for stories

### BookingDetail

- `BookingStates` match getachef DB values exactly (`src/schemas/booking.ts`)
- All price fields (`totalAmount`, `basePrice`, `pricePerGuest`, `platformFee`, `chefFee`) are strings (getachef handles currency formatting)
- `requestId` is shorten to 6 chars for display: `requestId.slice(0, 6)`
- Accordion used for collapsible price info
- Wrap the Accordion in a Card component.
- `onClick` = back button handler
- `onCancel` = cancel booking handler

### ChefProfile

-`Testimonial.tsx` written seprately and used in `reviews` part

- display multiple reviews without showing all at once.
- `Testimonial` accepts a `reviews` array and manages carousel state internally with prev/next buttons.
- `averageRating` is computed internally from the `reviews` array
- Only `menus[0]` is rendered — component shows the first menu only
- Gallery display at 2 images: `gallery.slice(0, 2)`

### MinProfile

- `experienceYears` field uses `Number(e.target.value)` conversion on change
- `useForm` inside the component,
- `onDeleteGallery` is defined in props but not wired up in the JSX yet

### Switch — data-[state=checked]

**Context:** Default shadcn Switch used `data-checked:` Tailwind variant which did not match the actual `data-state="checked"` attribute set by Radix UI.
**Decision:** Switch rewritten to use `data-[state=checked]:` and `data-[state=unchecked]:` throughout. (AI recommendation)
