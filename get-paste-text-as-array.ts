pasteText: string = '';
parsedValues: string[] = [];

constructor(
  public dialogRef: MatDialogRef<SelectMatchingRecordsComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
) {

  ngOnInit() { }

  onPasteTextChange() {
    this.parsedValues = this.pasteText
      .split(/\r?\n/)
      .map(v => v.trim())
      .filter(v => v.length > 0);
  }

  onClear() {
    this.pasteText = '';
    this.parsedValues = [];
  }

  onConfirm() {
    this.dialogRef.close({ parsedValues: this.parsedValues });
  }

  onClose() {
    this.dialogRef.close(null);
  }
