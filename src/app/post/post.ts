export class Post {

  private _uid: number;
  private _postId: number;
  private _title: string;
  private _description: string;
  private _imageFile: string;
  private _expirationDate: string;
  private _location: number;
  private _status: number;
  private _type: number;
  private _freeType: number;
  private _upVotes: number;
  private _downVotes: number;
  private _creationEdit: number;
  private _recentEdit: number;
  private _active: boolean;

  constructor(uid: number, postId: number, title: string, description: string, imageFile: string, expirationDate: string,
              location: number, status: number, type: number, freeType: number, upVotes: number, downVotes: number, creationEdit: number,
              recentEdit: number, active: boolean) {
    this._uid = uid;
    this._postId = postId;
    this._title = title;
    this._description = description;
    this._imageFile = imageFile;
    this._expirationDate = expirationDate;
    this._location = location;
    this._status = status;
    this._type = type;
    this._freeType = freeType;
    this._upVotes = upVotes;
    this._downVotes = downVotes;
    this._creationEdit = creationEdit;
    this._recentEdit = recentEdit;
    this._active = active;
  }

  get uid(): number {
    return this._uid;
  }

  get postId(): number {
    return this._postId;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get imageFile(): string {
    return this._imageFile;
  }

  get expirationDate(): string {
    return this._expirationDate;
  }

  get location(): number {
    return this._location;
  }

  get status(): number {
    return this._status;
  }

  get type(): number {
    return this._type;
  }

  get freeType(): number {
    return this._freeType;
  }

  get upVotes(): number {
    return this._upVotes;
  }

  get downVotes(): number {
    return this._downVotes;
  }

  get creationEdit(): number {
    return this._creationEdit;
  }

  get recentEdit(): number {
    return this._recentEdit;
  }

  get active(): boolean {
    return this._active;
  }


  set uid(value: number) {
    this._uid = value;
  }

  set postId(value: number) {
    this._postId = value;
  }

  set title(value: string) {
    this._title = value;
  }

  set description(value: string) {
    this._description = value;
  }

  set imageFile(value: string) {
    this._imageFile = value;
  }

  set expirationDate(value: string) {
    this._expirationDate = value;
  }

  set location(value: number) {
    this._location = value;
  }

  set status(value: number) {
    this._status = value;
  }

  set type(value: number) {
    this._type = value;
  }

  set freeType(value: number) {
    this._freeType = value;
  }

  set upVotes(value: number) {
    this._upVotes = value;
  }

  set downVotes(value: number) {
    this._downVotes = value;
  }

  set creationEdit(value: number) {
    this._creationEdit = value;
  }

  set recentEdit(value: number) {
    this._recentEdit = value;
  }

  set active(value: boolean) {
    this._active = value;
  }
}
