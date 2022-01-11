# Obelisk
> Functions for any projects Typescript
> Modules and function for global use typescript using jest

## Instalation
 > npm i alvitre-obelisk
 > yarn add alvitre-obelisk

## Functions
### *calcYearsOldWithMounths*
  > Calculate age with months of life
  calcYearsOldWithMounths("1993-06-10") = "28 anos e 6 meses"

### *sliceStringWithDot*
  > Cut string adding points
  sliceStringWithDot("lorem ipsum", 3) = lor ...

### *formatNumbers*
  > Format numbers to default US, JS, PTBR
  formatNumbers("1992-06-10") = 10-06-1992
  formatNumbers("1992,06,10") = 10-06-1992

### validarToken
  > Verify with token is valid string
  validarToken(null) = false
  validarToken(undefined) = false