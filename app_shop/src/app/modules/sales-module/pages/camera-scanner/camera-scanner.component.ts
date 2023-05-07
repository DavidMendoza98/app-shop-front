import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';
//import { ZXingScannerComponent } from '@zxing/ngx-scanner/lib/zxing-scanner.component';
import { InventoryService } from '../../../inventory-module/inventory.service';

@Component({
  selector: 'app-camera-scanner',
  templateUrl: './camera-scanner.component.html',
  styleUrls: ['./camera-scanner.component.css']
})
export class CameraScannerComponent implements OnInit {

  public codigo:any;
  public allowCamera:boolean=false;
  availableDevices: MediaDeviceInfo[] = [];
  currentDevice!: MediaDeviceInfo | null;

  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.AZTEC,
    BarcodeFormat.CODABAR,
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_93,
    BarcodeFormat.EAN_8,
    BarcodeFormat.ITF,
    BarcodeFormat.MAXICODE,
    BarcodeFormat.RSS_14,
    BarcodeFormat.RSS_EXPANDED,
    BarcodeFormat.UPC_A,
    BarcodeFormat.UPC_E,
    BarcodeFormat.UPC_EAN_EXTENSION,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  hasDevices: boolean = false;
  hasPermission: boolean = false ;

  qrResultString: string | null = '';

  torchEnabled = false;
  torchAvailable$ = new BehaviorSubject<boolean>(false);
  tryHarder = false;
  public allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];
  
  //constructor(private readonly _dialog: MatDialog) { }
  constructor(private service:InventoryService){}
  public product:any;
  public lote:any;
  ngOnInit(): void {
    //let scanner = new ZXingScannerComponent();
  }
  buscarProducto(codigo:string){
    this.service.getProductByCodigo(codigo).subscribe((x:any)=>{this.product = x.data[0]
    this.lote = x.data1[0]
    });
  }

  camerasFoundHandler($event: any){

  }
  camerasNotFoundHandler($event: any){

  }
  scanSuccessHandler($event: any){
    console.log($event)
    this.codigo = $event;
    this.buscarProducto($event);
  }
  scanErrorHandler($event: any){

  }
  scanFailureHandler($event: any){

  }
  scanCompleteHandler($event: any){

  }

  clearResult(): void {
    this.codigo = '';
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    //console.log(devices);
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }

  onDeviceSelectChange(selected: string | null) {
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.currentDevice = device || null;
  }

  openFormatsDialog() {
    const data = {
      formatsEnabled: this.formatsEnabled,
    };

    // this._dialog
    //   .open(FormatsDialogComponent, { data })
    //   .afterClosed()
    //   .subscribe(x => { if (x) { this.formatsEnabled = x; } });
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  openInfoDialog() {
    const data = {
      hasDevices: this.hasDevices,
      hasPermission: this.hasPermission,
    };

    //this._dialog.open(AppInfoDialogComponent, { data });
  }

  onTorchCompatible(isCompatible: boolean): void {
    this.torchAvailable$.next(isCompatible || false);
  }

  toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
  }

  toggleTryHarder(): void {
    this.tryHarder = !this.tryHarder;
  }

}
