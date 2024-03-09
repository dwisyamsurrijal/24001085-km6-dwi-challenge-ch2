class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="col-12 col-md-4 mb-4">
                
                        <div class="card">
                            <img src="${this.image}" class="card-img-top rounded-5 p-3" alt="..." style="height:300px;  object-fit: cover; object-position: center; ">
                            <div class="card-body">
                                <p class="card-text">${this.manufacture}/${this.type}</p>
                                <h5 class="card-title fw-bold">Rp ${this.rentPerDay}/Hari</h5>
                                <p class="card-text">${this.description}</p>
                            <p><img src="images/fi_users.png" alt=""><span class="ps-2">${this.capacity} Orang</span></p>
                            <p><img src="images/fi_settings.png" alt=""><span class="ps-2">${this.transmission}</span></p>
                            <p><img src="images/fi_calendar.png" alt=""><span class="ps-2">Tahun ${this.year}</span></p>
                            <a class="text-center mx-auto w-100" href="#"><button type="button" class="btn btn-success w-100 mt-2">Pilih mobil</button></a>
                            </div>
                        </div>
                    </div>
                    </div>
    `;
  }
}
