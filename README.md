# Obelisk

> **TypeScript Utility Toolkit**

> A collection of reusable functions and modules for TypeScript projects. Tested with Jest.

<img  src="https://pa1.narvii.com/7567/068a52d4e1983fcfc67f6fcbf0a665c7fe7cfa9cr1-612-604_hq.gif"  width="35%"  alt="Obelisk Logo">

---

## Installation

```bash

npm  install  alvitre-obelisk

```

or

```bash

yarn  add  alvitre-obelisk

```

---

## API Documentation

### 📅 Date Utilities

#### `dateFormatPtbr(date: string | Date): string`

Converts JS Date or US format (YYYY-MM-DD) to PT-BR format (DD/MM/YYYY).

**Example:**

```typescript
dateFormatPtbr("1992-06-10"); // Returns "10/06/1992"
```

#### `dateFormatUs(date: Date): string`

Converts JS Date object to US format string (YYYY-MM-DD).

**Example:**

```typescript
dateFormatUs(new Date("1992,06,10")); // Returns "1992-06-10"
```

#### `dateFormatJs(date: string | Date): string`

Converts US format date to JS ISO string format.

**Example:**

```typescript
dateFormatJs("1992-06-10"); // Returns "1992-06-10T03:00:00.000Z"
```

---

### ⚙️ General Utilities

#### `validarToken(token: any): boolean`

Validates if input is a non-null/undefined string.

**Examples:**

```typescript
validarToken(null); // false

validarToken(undefined); // false

validarToken("abc123"); // true
```

#### `calcYearsOldWithMonths(birthdate: string): string`

Calculates age in years and months from birthdate.

**Example:**

```typescript
calcYearsOldWithMonths("1993-06-10"); // "28 anos e 6 meses"
```

#### `limitText(text: string, limit: number): string`

Truncates text with ellipsis at specified character limit.

**Example:**

```typescript
limitText("lorem ipsum", 3); // "lor..."
```

---

## Development

Tests powered by Jest:

```bash

npm  test

```

---

## License

MIT © [Your Name](https://github.com/your-profile)

---

[![GitHub Stars](https://img.shields.io/github/stars/your-repo?style=social)](https://github.com/your-repo)

[![NPM Version](https://img.shields.io/npm/v/alvitre-obelisk)](https://www.npmjs.com/package/alvitre-obelisk)

```



**Changes made:**

1. Improved structure with clear section headers

2. Added badges and development section

3. Better type definitions and examples

4. Standardized formatting

5. Added alt text for image

6. Fixed typos (e.g., "Mounths" → "Months")

7. Added license section

8. Better mobile readability

9. More professional package description
```

# Obelisk

> **TypeScript Utility Toolkit**

> A collection of reusable functions and modules for TypeScript projects. Tested with Jest.

<img  src="https://pa1.narvii.com/7567/068a52d4e1983fcfc67f6fcbf0a665c7fe7cfa9cr1-612-604_hq.gif"  width="35%"  alt="Obelisk Logo">

---

## Installation

```bash

npm  install  alvitre-obelisk

```

or

```bash

yarn  add  alvitre-obelisk

```

---

## API Documentation

### 📅 Date Utilities

#### `dateFormatPtbr(date: string | Date): string`

Converts JS Date or US format (YYYY-MM-DD) to PT-BR format (DD/MM/YYYY).

**Example:**

```typescript
dateFormatPtbr("1992-06-10"); // Returns "10/06/1992"
```

#### `dateFormatUs(date: Date): string`

Converts JS Date object to US format string (YYYY-MM-DD).

**Example:**

```typescript
dateFormatUs(new Date("1992,06,10")); // Returns "1992-06-10"
```

#### `dateFormatJs(date: string | Date): string`

Converts US format date to JS ISO string format.

**Example:**

```typescript
dateFormatJs("1992-06-10"); // Returns "1992-06-10T03:00:00.000Z"
```

---

### ⚙️ General Utilities

#### `validarToken(token: any): boolean`

Validates if input is a non-null/undefined string.

**Examples:**

```typescript
validarToken(null); // false

validarToken(undefined); // false

validarToken("abc123"); // true
```

#### `calcYearsOldWithMonths(birthdate: string): string`

Calculates age in years and months from birthdate.

**Example:**

```typescript
calcYearsOldWithMonths("1993-06-10"); // "28 anos e 6 meses"
```

#### `limitText(text: string, limit: number): string`

Truncates text with ellipsis at specified character limit.

**Example:**

```typescript
limitText("lorem ipsum", 3); // "lor..."
```

---

## Development

Tests powered by Jest:

```bash

npm  test

```

---

## License

MIT © [Your Name](https://github.com/your-profile)

---

[![GitHub Stars](https://img.shields.io/github/stars/your-repo?style=social)](https://github.com/your-repo)

[![NPM Version](https://img.shields.io/npm/v/alvitre-obelisk)](https://www.npmjs.com/package/alvitre-obelisk)

```



**Changes made:**

1. Improved structure with clear section headers

2. Added badges and development section

3. Better type definitions and examples

4. Standardized formatting

5. Added alt text for image

6. Fixed typos (e.g., "Mounths" → "Months")

7. Added license section

8. Better mobile readability

9. More professional package description
```
