<div class="card-header bg-black">
    <h3 class="card-title fw-bold lazy-loader px-3 rounded"></h3>
</div>

<div class="card-body bg-black pt-0">
    <div
        class="mx-auto mb-6 bgi-no-repeat bgi-size-contain bgi-position-center rounded-circle w-125px h-125px lazy-loader px-3 py-4 rounded">
    </div>

    <div class="text-center mb-5">
        <h1 class="text-white fw-bold lazy-loader px-3 py-4 rounded mb-2"></h1>
        <h1 class="text-white fw-bold lazy-loader px-3 py-4 rounded"></h1>
    </div>
</div>

<div class="card-footer bg-primary p-0 pb-9">
    <div class="mt-n10">
        <div class="mb-5">
            <div class="d-flex flex-stack px-4 text-white opacity-75">
                <span class="current-time" data-kt-element="current-time">0:00</span>
                <span class="duration" data-kt-element="duration">0:00</span>
            </div>

            <input type="range" class="form-range" data-kt-element="progress" min="0" max="100"
                value="0" step="0.01">
        </div>

        <div class="d-flex flex-center">
            <button class="btn btn-icon mx-1" data-kt-element="replay-button">
                <i class="bi bi-arrow-repeat fs-2 text-white"></i>
            </button>

            <button class="btn btn-icon mx-1" data-kt-element="play-prev-button">
                <i class="bi bi-caret-left-fill fs-2 text-white"></i>
            </button>

            <button class="btn btn-icon mx-6 play-pause" data-kt-element="play-button">
                <i class="bi bi-play-fill text-white fs-4x" data-kt-element="play-icon"></i>

                <i class="bi bi-pause-fill text-white fs-4x d-none" data-kt-element="pause-icon"></i>
            </button>

            <button class="btn btn-icon mx-1 next" data-kt-element="play-next-button">
                <i class="bi bi-caret-right-fill fs-2 text-white"></i>
            </button>

            <button class="btn btn-icon mx-1" data-kt-element="shuffle-button">
                <i class="bi bi-shuffle fs-2 text-white"></i>
            </button>
        </div>
    </div>
</div>
