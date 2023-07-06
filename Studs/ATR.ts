/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class Asset {
    @Property()
    public imeiNumber?: string;

    @Property()
    public compontents: string;

    @Property()
    public retailerID: string;


    @Property()
    public assemblerID: string;

    @Property()
    public isBlocked: boolean;
    
    @Property()
    public modelNumber : number;

}
