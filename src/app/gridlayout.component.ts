import { Component } from '@angular/core';

@Component({
    selector: 'gridlayout-component',
    template: `
        <div class="example-wrapper">
            <div class="page">
                <div class="content">
                    <kendo-gridlayout
                        [rows]="[90, 90, 90, 90]"
                        [cols]="[90, 90, 90]"
                        [gap]="5">
                            <kendo-gridlayout-item [col]="1" [row]="1" [colSpan]="2" class="box rect">
                                <span>Box</span>
                            </kendo-gridlayout-item>
                            <kendo-gridlayout-item [col]="3" [row]="1" class="box">
                                <span>Box</span>
                            </kendo-gridlayout-item>
                            <kendo-gridlayout-item [col]="1" [row]="2" class="box">
                                <span>Box</span>
                            </kendo-gridlayout-item>
                            <kendo-gridlayout-item [col]="2" [row]="2" [colSpan]="2" [rowSpan]="2" class="box big">
                                <span>Box</span>
                            </kendo-gridlayout-item>
                            <kendo-gridlayout-item [col]="1" [row]="3" [rowSpan]="2" class="box rect">
                                <span>Box</span>
                            </kendo-gridlayout-item>
                            <kendo-gridlayout-item [col]="2" [row]="4" class="box">
                                <span>Box</span>
                            </kendo-gridlayout-item>
                            <kendo-gridlayout-item [col]="3" [row]="4" class="box">
                                <span>Box</span>
                            </kendo-gridlayout-item>
                    </kendo-gridlayout>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .example-wrapper {
            width: 340px;
            margin: 0 auto;
            box-shadow: 0px 10px 20px #00000029;
            border-radius: 30px;
        }
        .page { padding: 20px 10px; }
        .content {
            background: #F9F9F9;
            height: 420px;
            overflow: auto;
        }
        .box {
            padding: 4px;
            background-color: #87dfce;
        }
        .big { background-color: #fea69c; }
        .rect { background-color: #fee47c; }
    ` ]
})
export class GridLayoutComponent {}
