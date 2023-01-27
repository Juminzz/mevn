<template>
  <div class="container">
    <div
      class="file-upload-container"
      @dragenter="onDragenter"
      @dragover="onDragover"
      @dragleave="onDragleave"
      @drop="onDrop"
      @click="onClick"
    >
      <div class="file-upload" :class="isDragged ? 'dragged' : ''">
        Drag & Drop files
      </div>
    </div>
    <!-- 파일 업로드 !  -->
    <input
      type="file"
      ref="fileInput"
      class="file-upload-input"
      @change="onFileChange"
      multiple
    />
    <!-- 업로드된 리스트  -->
    <div class="file-upload-list">
      <div
        class="file-upload-list__item"
        v-for="(file, index) in fileList"
        :key="index"
      >
        <div class="file-upload-list__item__data">
          <img class="file-upload-list__item__data-thumbnail" :scr="file.src" />
          <div class="file-upload-list__item__data-name">
            {{ file.name }}
          </div>
        </div>
        <div
          class="file-upload-list__item__btn-remove"
          @click="handleRemove(index)"
        >
          삭제
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  min-height: 300px;
  width: 500px;
  margin: 0 auto;
}
.file-upload {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: transparent;
  border-radius: 20px;
  cursor: pointer;
}
</style>
<script></script>
