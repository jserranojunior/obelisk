# Obelisk
> Functions for any projects Typescript <br>
> Modules and function for global use typescript using jest for tests.


<img src="https://pa1.narvii.com/7567/068a52d4e1983fcfc67f6fcbf0a665c7fe7cfa9cr1-612-604_hq.gif" width="35%">


## Instalation
``` npm i alvitre-obelisk ``` <br>
``` yarn add alvitre-obelisk ```

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