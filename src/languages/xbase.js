function xbase(hljs) {
  return {
    name: 'xBase',
    aliases: ['clipper', 'harbour', 'xharbour'],
    keywords: {
      keyword:
        '#include #define if endif ifdef ifndef define return procedure function local public private static ' +
        'do while enddo for next switch endswitch case otherwise endcase class endclass method endtext ' +
        'begin sequence recover break try catch finally endtry declare request use index set clear ' +
        'typedef parameters with object endwith',
      literal: '.T. .F. NIL TRUE FALSE',
      built_in:
        'chr len str val substr left right upper lower alert alltrim ltrim rtrim space trim date time seconds ' +
        'dow dtoc ctod dtos stod AADD ABS ACLONE ADIR AEVAL AFIELDS ALERT ASC ASCAN ASIZE ASORT AT ATAIL ' +
        'BOF CDOW CMONTH COL COLORSELECT CTOD DATE DAY DBAPPEND DBCLOSEALL DBCLOSEAREA DBCOMMITALL ' +
        'DBDELETE DBEDIT DBEVAL DBFILTER DBGOBOTTOM DBGOTO DBGOTOP DBRECALL DBREINDEX DBRELATION ' +
        'DBRLOCK DBRLOCKLIST DBRUNLOCK DBSEEK DBSETFILTER DBSETINDEX DBSETORDER DBSETRELATION DBSKIP ' +
        'DBSTRUCT DBUNLOCK DBUNLOCKALL DBUSEAREA DELETED DESCEND DEVOUT DIR DIRECTORY DISKSPACE ' +
        'DISPBEGIN DISPBOX DISPCOUNT DISPEND DISPLAY DISPOUT EMPTY EOF EVAL EXP FCLOSE FCREATE FIELDS ' +
        'FILE FOPEN FREAD FWRITE FSEEK FLOCK FRENAME FERROR FOUND GETENV HARDCR HEADER INDEXKEY INDEXORD ' +
        'INKEY INT ISALPHA ISDIGIT ISLOWER ISPRINTER ISUPPER LASTKEY LEN LOG LOWER LTRIM MAX MIN MEMOEDIT ' +
        'MEMOREAD MEMOWRIT MEMVARBLOCK MOD MONTH NETERR NETNAME ORDSETFOCUS OUTERR PCOUNT PROCNAME ' +
        'QOUT QQOUT RANDOM RAT RDDNAME RDDREGISTER RDDSETDEFAULT READ RECNO RECSIZE REPLICATE RIGHT ' +
        'RLOCK ROUND ROW RTRIM SAVESCREEN SCROLL SECONDS SELECT SET SETBLINK SETCURSOR SETKEY SPACE ' +
        'SQRT STR STRTRAN STRZERO STUFF SUBSTR SUM TIME TRANSFORM TYPE UPDATED UPPER USED VAL VALTYPE ' +
        'VERSION YEAR'
    },
    contains: [
      hljs.COMMENT(/\/\/.*/, '$'),
      hljs.COMMENT(/\/\*/, /\*\//),
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE
    ]
  };
}

export default xbase;
