// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Option extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Option entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Option must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Option", id.toString(), this);
    }
  }

  static load(id: string): Option | null {
    return changetype<Option | null>(store.get("Option", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get initiator(): Bytes {
    let value = this.get("initiator");
    return value!.toBytes();
  }

  set initiator(value: Bytes) {
    this.set("initiator", Value.fromBytes(value));
  }

  get participant(): Bytes | null {
    let value = this.get("participant");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set participant(value: Bytes | null) {
    if (!value) {
      this.unset("participant");
    } else {
      this.set("participant", Value.fromBytes(<Bytes>value));
    }
  }

  get colleteral(): Bytes | null {
    let value = this.get("colleteral");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set colleteral(value: Bytes | null) {
    if (!value) {
      this.unset("colleteral");
    } else {
      this.set("colleteral", Value.fromBytes(<Bytes>value));
    }
  }

  get counterAsset(): Bytes {
    let value = this.get("counterAsset");
    return value!.toBytes();
  }

  set counterAsset(value: Bytes) {
    this.set("counterAsset", Value.fromBytes(value));
  }

  get premiumAsset(): Bytes {
    let value = this.get("premiumAsset");
    return value!.toBytes();
  }

  set premiumAsset(value: Bytes) {
    this.set("premiumAsset", Value.fromBytes(value));
  }

  get amountOfColleteral(): BigInt {
    let value = this.get("amountOfColleteral");
    return value!.toBigInt();
  }

  set amountOfColleteral(value: BigInt) {
    this.set("amountOfColleteral", Value.fromBigInt(value));
  }

  get amountOfCA(): BigInt {
    let value = this.get("amountOfCA");
    return value!.toBigInt();
  }

  set amountOfCA(value: BigInt) {
    this.set("amountOfCA", Value.fromBigInt(value));
  }

  get premiumAmount(): BigInt {
    let value = this.get("premiumAmount");
    return value!.toBigInt();
  }

  set premiumAmount(value: BigInt) {
    this.set("premiumAmount", Value.fromBigInt(value));
  }

  get colleteralAssetName(): string | null {
    let value = this.get("colleteralAssetName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set colleteralAssetName(value: string | null) {
    if (!value) {
      this.unset("colleteralAssetName");
    } else {
      this.set("colleteralAssetName", Value.fromString(<string>value));
    }
  }

  get counterAssetName(): string | null {
    let value = this.get("counterAssetName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set counterAssetName(value: string | null) {
    if (!value) {
      this.unset("counterAssetName");
    } else {
      this.set("counterAssetName", Value.fromString(<string>value));
    }
  }

  get premiumAssetName(): string | null {
    let value = this.get("premiumAssetName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set premiumAssetName(value: string | null) {
    if (!value) {
      this.unset("premiumAssetName");
    } else {
      this.set("premiumAssetName", Value.fromString(<string>value));
    }
  }
}

export class OptionDetail extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OptionDetail entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type OptionDetail must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("OptionDetail", id.toString(), this);
    }
  }

  static load(id: string): OptionDetail | null {
    return changetype<OptionDetail | null>(store.get("OptionDetail", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get listAsset(): Bytes | null {
    let value = this.get("listAsset");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set listAsset(value: Bytes | null) {
    if (!value) {
      this.unset("listAsset");
    } else {
      this.set("listAsset", Value.fromBytes(<Bytes>value));
    }
  }

  get priceFeedAddress(): Bytes | null {
    let value = this.get("priceFeedAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set priceFeedAddress(value: Bytes | null) {
    if (!value) {
      this.unset("priceFeedAddress");
    } else {
      this.set("priceFeedAddress", Value.fromBytes(<Bytes>value));
    }
  }

  get poolAddress(): Bytes | null {
    let value = this.get("poolAddress");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set poolAddress(value: Bytes | null) {
    if (!value) {
      this.unset("poolAddress");
    } else {
      this.set("poolAddress", Value.fromBytes(<Bytes>value));
    }
  }

  get offerEnd(): BigInt | null {
    let value = this.get("offerEnd");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set offerEnd(value: BigInt | null) {
    if (!value) {
      this.unset("offerEnd");
    } else {
      this.set("offerEnd", Value.fromBigInt(<BigInt>value));
    }
  }

  get optionExpiry(): BigInt | null {
    let value = this.get("optionExpiry");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set optionExpiry(value: BigInt | null) {
    if (!value) {
      this.unset("optionExpiry");
    } else {
      this.set("optionExpiry", Value.fromBigInt(<BigInt>value));
    }
  }

  get listAmount(): BigInt | null {
    let value = this.get("listAmount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set listAmount(value: BigInt | null) {
    if (!value) {
      this.unset("listAmount");
    } else {
      this.set("listAmount", Value.fromBigInt(<BigInt>value));
    }
  }

  get isListed(): boolean {
    let value = this.get("isListed");
    return value!.toBoolean();
  }

  set isListed(value: boolean) {
    this.set("isListed", Value.fromBoolean(value));
  }

  get exercised(): boolean {
    let value = this.get("exercised");
    return value!.toBoolean();
  }

  set exercised(value: boolean) {
    this.set("exercised", Value.fromBoolean(value));
  }
}
